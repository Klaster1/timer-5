import {RouterNavigatedPayload, MinimalActivatedRouteSnapshot} from '@ngrx/router-store'

export const findRoute = (payload: RouterNavigatedPayload, path: string[]):MinimalActivatedRouteSnapshot  => {
    return path.reduce((children, child, i) => {
        if (!children.length) return
        if (i === path.length - 1) return children[0][0]
        return children.filter(c => c.routeConfig.path === path[0]).map(c=>c.children)
    }, payload.routerState.root.children)
}

export const fromEntries = <T>(entries: [string, T][]) => entries.reduce((acc, [key, value]) => ({...acc, [key]: value}), {} as {[key: string]: T})