// app/speech-demo/page.tsx
'use client'
import { useEffect, useRef, useState } from 'react'

export default function Page() {
  const [supported, setSupported] = useState(false)
  const mediaRef = useRef<MediaRecorder | null>(null)

  useEffect(() => {
    setSupported(!!('speechSynthesis' in window))
  }, [])

  const speak = () => {
    if (!('speechSynthesis' in window)) return
    const u = new SpeechSynthesisUtterance('こんにちは。発音を確認してください。')
    window.speechSynthesis.speak(u)
  }

  const startRecord = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
    mediaRef.current = new MediaRecorder(stream)
    mediaRef.current.start()
  }
  const stopRecord = () =>
    mediaRef.current && mediaRef.current.state !== 'inactive' && mediaRef.current.stop()

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Speech / Recording Demo</h1>
      <p>SpeechSynthesis 지원: {supported ? '가능' : '불가'}</p>
      <div className="flex gap-3">
        <button className="btn" onClick={speak}>TTS 재생</button>
        <button className="btn" onClick={startRecord}>녹음 시작</button>
        <button className="btn" onClick={stopRecord}>녹음 종료</button>
      </div>
    </div>
  )
}
