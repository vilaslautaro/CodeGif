import { renderHook } from '@testing-library/react-hooks'
import useForm from 'hooks/useForm'

test('should change keyword', () => {
    const { result } = renderHook(() => useForm())
    act(() => {
        result.current.updateKeyword('batman')
    })
    expect(result.current.keyword).toBe('batman')
})


test('should update correctly times when used twice', () => {
    const { result } = renderHook(() => useForm())
    act(() => {
        result.current.updateKeyword('batman')
        result.current.updateKeyword('spiderman')
    })
    expect(result.current.keyword).toBe('spiderman')
})