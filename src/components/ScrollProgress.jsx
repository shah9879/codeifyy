import useScrollProgress from '../hooks/useScrollProgress'

export default function ScrollProgress() {
  const { progress } = useScrollProgress()

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '3px',
        width: `${progress}%`,
        background: '#16A34A',
        zIndex: 999,
        borderRadius: '0 2px 2px 0',
        transition: 'width 0.1s linear',
      }}
    />
  )
}