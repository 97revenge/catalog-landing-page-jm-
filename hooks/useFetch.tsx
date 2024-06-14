'use client'

import next from 'next'
import { useTransition, useEffect, useState, useCallback } from 'react'

export const useFetch = ({ url }: { url: string }) => {
  const [state, setState] = useState<Array<any>>([])

  const callback = useCallback(async () => {
    startTransition(async () => {
      const response = await fetch(url, {
        method: 'GET',
        next: { revalidate: 3600 },
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const data = await response.json()

      setState(data)
    })
  }, [url])

  const [isPending, startTransition] = useTransition()

  useEffect(() => {
    callback()
  }, [callback])

  return { state, isPending }
}
