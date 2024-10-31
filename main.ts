

const enum ModelEnum {
  history = 'history',
  hash = 'hash'
}

type Model = ModelEnum.history | ModelEnum.hash
type HistoryLocation = string

type HistoryStateArray = Array<HistoryStateValue>

type HistoryStateValue =
  | string
  | number
  | boolean
  | null
  | undefined
  | HistoryState
  | HistoryStateArray

interface HistoryState {
  [x: number]: HistoryStateValue
  [x: string]: HistoryStateValue
}


type _ScrollPositionNormalized = {
  behavior?: ScrollOptions['behavior']
  left: number
  top: number
}

interface StateEntry extends HistoryState {
  back: HistoryLocation | null
  current: HistoryLocation
  forward: HistoryLocation | null
  position: number
  replaced: boolean
  scroll: _ScrollPositionNormalized | null | false
}


interface Router {
  readonly base: string,
  readonly mode: Model,
  readonly location: HistoryLocation,
  push(to: HistoryLocation): void,
  replace(to: HistoryLocation): void,
  go(delta: number): void,
  destory(): void
}

const computeScrollPosition = (): _ScrollPositionNormalized => ({
  left: window.scrollX,
  top: window.scrollY,
})

const assign = Object.assign

function go(delta: number): void {
  const { history } = window
  history.go(delta)
}



function useHistoryStateNavigation(base: string) {
  const { history, location } = window
  const historyState: StateEntry = history?.state || {}
  if (!historyState) {
    // 
  }

  function changeLocation(to: HistoryLocation, state: StateEntry, replace: boolean): void {
    const hashIndex = base.indexOf('#')
    const url = hashIndex > -1 ?
      base.slice(hashIndex) + to : location.protocol + '//' + location.host + base + to
    try {
      history[replace ? 'replaceState' : 'pushState'](state, '', null)
    } catch (err) {
      console.error(err)
      location[replace ? 'replace' : 'assign'](url)
    }

  }

  function replace(to: HistoryLocation, data?: HistoryState) {
    const state: StateEntry = assign({},
      history.state,
      data,
      {
        back: historyState.back,
        to,
        forward: historyState.forward,
        replaced: true,
        position: window.history.length
      },
      { position: historyState.position })
    changeLocation(to, state, true)
  }
  function push(to: HistoryLocation, data?: HistoryState) {
    const currentState = assign({},
      historyState,{
        forward:to,
        scroll: computeScrollPosition()
      }
    )

    changeLocation(currentState.current, currentState, true)

    const state:StateEntry = assign({},
      {
      back: currentState.back,
      current: to,
      forward:null,
      replaced: currentState.replaced,
      to: currentState.to,
      scroll: currentState.scroll
    },{
      position: currentState.position + 1
    },
    data)
    changeLocation(to, state, false)
  }

  return {
    replace,push
  }


}

function initRouter(mode: Model = ModelEnum.history): Router {
  let base: string = '/'
  switch (mode) {
    case ModelEnum.history:
      break;
    case ModelEnum.hash:
      base = location.host ? location.pathname + location.search : ''
      break;
  }
  const { push, replace } = useHistoryStateNavigation(base)
  const router: Router = assign({ base, mode, go,push,replace })
  return router
}


function setup() {
 const router = initRouter()
 router.push('/blog')
}

setup()
