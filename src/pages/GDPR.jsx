import "../assets/style/gdpr.scss";

const GDPR = () => {
  return (
    <section className="GDPR-section">
      <div className="GDPR-content">
        <h1 className="l-h dk-txt">Integritetspolicy</h1>
        <article className="GDPR-container">
          <h2 className="m-h dk-txt">Introduktion</h2>
          <p className="l-p dk-txt">
            Vi värnar om din integritet och följer EU:s dataskyddsförordning (GDPR) för att säkerställa att dina personuppgifter hanteras på ett tryggt och ansvarsfullt sätt. I denna integritetspolicy förklarar vi hur vi samlar in, lagrar och använder dina uppgifter samt vilka rättigheter du har.
          </p>
        </article>
        <article className="GDPR-container">
          <h2 className="m-h dk-txt">Vilka uppgifter vi samlar in</h2>
          <p className="l-p dk-txt">
            Vi kan komma att samla in följande typer av personuppgifter:
          </p>
          <ul>
            <li className="l-p dk-txt"><strong>Kontaktinformation: </strong>Namn, adress, telefonnummer och e-postadress.</li>
            <li className="l-p dk-txt"><strong>Betalningsinformation: </strong>Fakturerings- och betalningsuppgifter (om relevant).</li>
            <li className="l-p dk-txt"><strong>Teknisk information: </strong>IP-adress och information om hur du använder vår webbplats (cookies, användarbeteende).</li>
          </ul>
        </article>
        <article className="GDPR-container">
          <h2 className="m-h dk-txt">Varför vi samlar in uppgifter</h2>
          <p className="l-p dk-txt">
            Vi behandlar personuppgifter för att kunna:
          </p>
          <ul>
            <li className="l-p dk-txt">Tillhandahålla våra tjänster och produkter.</li>
            <li className="l-p dk-txt">Kommunicera med dig, exempelvis för att besvara förfrågningar eller skicka information.</li>
            <li className="l-p dk-txt">Uppfylla rättsliga krav, exempelvis bokföring och skatteregler.</li>
            <li className="l-p dk-txt">Förbättra vår webbplats och våra tjänster genom analys av användarbeteenden.</li>
          </ul>
        </article>
        <article className="GDPR-container">
          <h2 className="m-h dk-txt">Hur vi lagrar och skyddar dina uppgifter</h2>
          <p className="l-p dk-txt">
            Vi använder tekniska och organisatoriska säkerhetsåtgärder för att skydda dina personuppgifter mot obehörig åtkomst, ändring eller radering. Dina uppgifter lagras i säkra system och åtkomst begränsas till behörig personal.
          </p>
        </article>
        <article className="GDPR-container">
          <h2 className="m-h dk-txt">Delning av uppgifter</h2>
          <p className="l-p dk-txt">
            Vi delar aldrig dina uppgifter med tredje part för marknadsföring. Vi kan dock dela dina uppgifter med:
          </p>
          <ul>
            <li className="l-p dk-txt">Leverantörer och partners som är nödvändiga för att leverera våra tjänster (t.ex. betaltjänstleverantörer).</li>
            <li className="l-p dk-txt">Myndigheter om det krävs enligt lag.</li>
          </ul>
        </article>
        <article className="GDPR-container">
          <h2 className="m-h dk-txt">Dina rättigheter</h2>
          <p className="l-p dk-txt">
          Enligt GDPR har du följande rättigheter:
          </p>
          <ul>
            <li className="l-p dk-txt"><strong>Rätt till tillgång: </strong>Du kan begära en kopia av de personuppgifter vi har om dig.</li>
            <li className="l-p dk-txt"><strong>Rätt till rättelse: </strong>Du kan begära att felaktiga uppgifter korrigeras.</li>
            <li className="l-p dk-txt"><strong>Rätt till radering: </strong>Du kan begära att vi raderar dina uppgifter (med vissa lagliga undantag).</li>
            <li className="l-p dk-txt"><strong>Rätt att invända: </strong>Du kan invända mot viss behandling av dina uppgifter, exempelvis för direktmarknadsföring.</li>
          </ul>
          <p className="l-p dk-txt">
            För att utöva dina rättigheter, vänligen kontakta oss via kontaktuppgifterna nedan.
          </p>
        </article>
        <article className="GDPR-container">
          <h2 className="m-h dk-txt">Kontaktuppgifter</h2>
          <p className="l-p dk-txt">
            Om du har frågor om hur vi hanterar dina personuppgifter eller vill utöva dina rättigheter, kontakta oss på:
          </p>
          <p className="l-p dk-txt">
            <strong>Hållbar Fastighetsservice Syd</strong>
          </p>
          <p className="l-p dk-txt">
            <strong>E-post: </strong> <a className="acc-txt" href="mailto:info@hallbarservice.se" target="blank">info@hallbarservice.se</a>
          </p>
          <p className="l-p dk-txt">
            <strong>Telefon: </strong> <a className="acc-txt" href="tel:+4640302000" target="blank">040-30 20 00</a>
          </p>
          <p className="l-p dk-txt">
            <strong>Adress: </strong> Amiralsgatan 68<br/>214 37 MALMÖ
          </p>
        </article>
      </div>
    </section>
  )
}

export default GDPR;