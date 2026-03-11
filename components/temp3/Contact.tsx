import { openingHours, socials } from "@/constants"

const Contact = () => {
  return (
    <footer id="contact">
      <img src="/images/footer-right-leaf.png" alt="right-leaf" id="f-right-leaf"  />
      <img src="/images/footer-left-leaf.png" alt="left-leaf" id="f-left-leaf"  />

      <div className="content">
        <h2>Where to Find Us</h2>
        <div>
            <h3>Visit Our Bar</h3>
            <p></p>
        </div>
        <div>
            <h3>Contact Us</h3>
            <p>(+91) 7895467042</p>
            <p>jassi_sabka_bhai@gmail.com</p>
        </div>
        <div>
            <h3>Open Every Day</h3>
            {openingHours.map((time)=>(
                <p key={time.day}>
                    {time.day} : {time.time}
                </p>
            ))}
        </div>
        <div>
            <h3>Socials</h3>
            <div className="flex-center gap-5">
                {socials.map((social, idx)=>(
                    <a key={social.name} 
                    href={social.url}
                    target="_blank">
                        <img src={social.icon} alt={social.icon} />
                    </a>
                ))}
            </div>
        </div>
      </div>
    </footer>
  )
}

export default Contact
