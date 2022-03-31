import useNearScreen from 'hooks/useNearScreen'
import { Suspense, lazy } from 'react'

const TrendingSearches = lazy(
    () => import('./TrendingSearches')
)

export default function LazyTrending() {
    const { isNearScreen, fromRef } = useNearScreen({ distance: '200px' })

    return (
        <div ref={fromRef}>
            <Suspense fallback={'cargando...'}>
                {isNearScreen ? <TrendingSearches /> : null}
            </Suspense>
        </div>
    )
}