import { useEffect, useState } from "react"

const useDebounce = (cb, timeout) => {
    const [debounceValue, setDebounceValue] = useState(cb)

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebounceValue(cb)
        }, timeout)

        return () => clearTimeout(handler)
    }, [cb, timeout])

    return debounceValue
}

export default useDebounce