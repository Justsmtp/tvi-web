export default function AnimatedBg() {
  return (
    <>
      <div style={{ position:'fixed', top:0, left:0, width:'100%', height:'100%', zIndex:0, pointerEvents:'none', overflow:'hidden' }}>
        <div style={{ position:'absolute', width:'500px', height:'500px', borderRadius:'50%', background:'radial-gradient(circle, rgba(212,167,44,0.06), transparent)', top:'-200px', left:'-150px', animation:'floatOrb 24s infinite ease-in-out' }} />
        <div style={{ position:'absolute', width:'400px', height:'400px', borderRadius:'50%', background:'radial-gradient(circle, rgba(6,59,42,0.08), transparent)', bottom:'-150px', right:'-100px', animation:'floatOrb 24s infinite ease-in-out 8s' }} />
        <div style={{ position:'absolute', width:'300px', height:'300px', borderRadius:'50%', background:'radial-gradient(circle, rgba(212,167,44,0.04), transparent)', top:'50%', left:'55%', animation:'floatOrb 24s infinite ease-in-out 16s' }} />
      </div>
      <style>{`
        @keyframes floatOrb {
          0%,100%{transform:translate(0,0) scale(1)}
          33%{transform:translate(40px,-40px) scale(1.08)}
          66%{transform:translate(-40px,40px) scale(0.92)}
        }
      `}</style>
    </>
  )
}
