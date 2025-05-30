'use client'

import { useEffect } from 'react'
import { setupImageOptimization } from '@/utils/images'
import { setupEventTracking } from '@/utils/tracking'
import { initUTMHandler } from '@/utils/utm-handler'

export default function ClientInit() {
  useEffect(() => {
    setupImageOptimization()
    setupEventTracking()
    initUTMHandler()
  }, [])

  return null
} 