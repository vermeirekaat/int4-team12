import Metadata from "../../components/Metadata";
import styles from "./Campagne.module.css";
import Image from "next/image";

export default function Campagne () {
    return (
        <article className={styles.container}>
            <Metadata/>
            <h1 className={styles.hidden}>Filter Bubbles</h1>
            <section className={styles.header}>
                <h2 className={styles.headline}>"You are what you <span>click</span>"</h2>

                <div className={styles.arrow}>
                    <Image
                        src="/assets/campagne/pijl.png"
                        alt="Green computer mouse"
                        width={117}
                        height={122}
                        />
                </div>
                <div className={styles.introduction}>
                    <div className={styles.window_green}></div>
                    <p className={styles.paragraaf}>
                        Je spendeert talloze minuten op sociale media (Facebook, Instagram...) waarbij honderden berichten jouw aandacht vragen. Maar op welke manier wordt er beslist welke berichten JIJ te zien krijgt? <br/> <br/> Het zijn je eigen kliks die bepalen welke berichten er op je feed terecht komen.
                    </p>
                </div>
                <div className={styles.image_protest}>
                <div className={styles.window_green}></div>
                    <Image
                        src="/assets/campagne/protest.png"
                        alt="Protest"
                        layout="intrinsic"
                        width={219}
                        height={197}
                    />
                </div>
                <div className={styles.image_phone}>
                <div className={styles.window_green}></div>
                    <Image
                        src="/assets/campagne/phone.png"
                        alt="Phone with emoticons"
                        width={199}
                        height={169}
                    /> 
                </div>
            </section>

            <section className={styles.purple}>
                <div className={styles.window_purple}></div>
                <div className={styles.content}>
                    <h2 className={styles.subtitle}>"Dus ik heb zelf de controle in handen want het gaat over mijn gedrag?"</h2>
                    <p className={styles.highlight}>Neen,</p>
                    <p className={styles.paragraaf_white}>Dit is helaas niet het geval. De algoritmes zorgen ervoor dat deze kliks zodanig geanalyseerd worden waardoor je er als gebruiker geen controle meer over hebt. <br/> <br/> Het gaat hier over "extreme personalisatie", je ziet enkel berichten die jij leuk of interssant gaat vinden. Onbewust bevindt je je in je eigen onzichtbare filter bubble.</p>
                </div>     
            </section>

            <section className={styles.information}>
                <div className={styles.intermezzo}> 
                <div className={styles.search}>
                    <Image 
                        src="/assets/campagne/search.svg"
                        alt="Search icon"
                        width={20}
                        height={20}
                        />
                        
                        <h2 className={styles.search_title}>Filter bubble</h2>

                    </div>
                    <p className={styles.definition}>"Verzameling van specifieke informatie die afgestemd is op het online gedrag van de gebruiker."</p>
                </div>

                <div className={styles.awareness}>
                    <h2 className={styles.subtitle_purple}>Be aware of your bubble</h2>
                    <p className={styles.awareness_content}>De filter bubble is te vergelijken met een spiegelpaleis. Je bent omringd door berichten en mensen die hetzelfde denken als jij. Maar dit zorgt ook voor "blind spots" aangezien je neit geconfronteerd wordt met tegenstrijdige ideeën. <br/> <br/> Je begeeft je in je eigen online wereld waar je geen controle hebt op de informatie die je krijgt. Dit zorgt ervoor dat je verschillende perspectieven mist en zelf niet kritisch omgaat met het raadplegen van nieuwsbronnen <br/> Niemand is evenveel geïnformeerd waardoor er afwijkende ideeën ontstaan op vlak van politiek. De plitieke wereld zal nog meer polariseren, een bedreiging voor de democratie.</p>
                </div>
            </section>
        </article>
    )
}