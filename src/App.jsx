import { useEffect, useState } from 'react'
import axios from 'axios'
import Logo from './components/Logo'
import Button from './components/Button'
import Quote from './components/Quote'
import Guide from './components/Guide'
import Social from './components/Social'
const baseURl = 'https://api.api-ninjas.com/v1/quotes?category=knowledge'
const apiKey = 'KJKU1Q/OU1oovIDR8ThNBw==SJUIAVsMni0GIzgz'

function App() {
  const [quote, setQuote] = useState('')
  const [author, setAuthor] = useState('')  
  const [isLoading, setIsLoading] = useState(false)
  const [show, setShow] = useState(false)

  const fetchQuote = () => {
    setIsLoading(true)
    setShow(true)
    axios
      .get(baseURl, { headers: { 'X-Api-Key': apiKey } })
      .then(response => {
        const quotes = response.data
        const randomIndex = Math.floor(Math.random() * quotes.length)
        setQuote(quotes[randomIndex].quote)
        setAuthor(quotes[randomIndex].author)
        setIsLoading(false)
      })
      .catch(error => {
        console.log('Error fetching data', error)
      })
  }

  const handleShareFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(quote)}`, '_blank')
  }

  const handleShareWhatsApp = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(quote)}`, '_blank');
  }

  const handleShareTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(quote)}`, '_blank');
  };

  const showQuote = isLoading ? <p className='text-3xl italic'>Loading...</p> : <Quote quote={quote} author={author} />
  const whatToShow = show ? showQuote : <Guide />
  return (
    <main className='w-[900px] m-auto flex flex-col gap-10 items-center my-20'>
      {/* Logo */}
      <Logo />
      {/* Button */}
      <Button handleClick={fetchQuote} />
      {/* What to Show */}
      {whatToShow}

      <div className='flex gap-5 items-center'>
        <Social imgSrc={'twitter.svg'} handleFunction={handleShareTwitter} />
        <Social imgSrc={'whatsapp.svg'} handleFunction={handleShareWhatsApp} />
        <Social imgSrc={'facebook.svg'} handleFunction={handleShareFacebook} />
      </div>

    </main>
  )
}

export default App
