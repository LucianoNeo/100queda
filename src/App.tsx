import { FacebookLogo, InstagramLogo, WhatsappLogo } from 'phosphor-react'

function App() {

  return (
    <div className='wrapper'>
      <nav>
        <a
          href='https://www.instagram.com/100queda2626'
          target='_blank'
          style={{
            display: 'flex',
            gap: '8px',
            alignItems: 'center',

          }}>
          <InstagramLogo size={42} weight="fill" />
          <span>INSTAGRAM</span>
        </a>
        <a
          href='https://www.facebook.com/profile.php?id=100032454821938'
          target='_blank'
          style={{
            display: 'flex',
            gap: '8px',
            alignItems: 'center',

          }}>
          <FacebookLogo size={42} weight="fill" />
          <span>FACEBOOK</span>
        </a>
        <a
          href='https://api.whatsapp.com/send?1=pt_BR&phone=5541991186765'
          target='_blank'
          style={{
            display: 'flex',
            gap: '8px',
            alignItems: 'center',

          }}>
          <WhatsappLogo size={42} weight="fill" />
          <span>WHATSAPP</span>
        </a>
      </nav>
    </div>
  )
}

export default App
