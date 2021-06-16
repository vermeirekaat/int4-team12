import Metadata from "../../components/Metadata";
import Positive from "../../components/campagne/Positive";
import styles from "./Campagne.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Campagne () {

    const [link, setLink] = useState();

    const router = useRouter();

    useEffect(() => {
        if (router.isReady) {
            setLink(router.query.knows);
        }
    });

    console.log(link);

    if (link === "true") {
        return (
            <>
                <Positive/>
            </>
        )
    }

    return (
        <>
        <Metadata/>

        <article className={styles.container}>
            <h1 className={styles.hidden}>Filter Bubbles</h1>
            <section className={styles.header}>
                <h2 className={styles.headline}>You are what you <span>click</span></h2>
                <div className={styles.introduction}>
                    <div className={styles.window_green}></div>
                    <p className={styles.paragraaf}>
                        Je spendeert talloze minuten op sociale media (Facebook, Instagram...) waarbij honderden berichten jouw aandacht vragen. Maar op welke manier wordt er beslist welke berichten JIJ te zien krijgt? <br/> <br/> Het zijn je eigen clicks die bepalen welke berichten er op je feed terecht komen.
                    </p>
                </div>
                <div className={styles.image_protest}>
                        <Image
                            src="/assets/campagne/protest.png"
                            alt="Protest"
                            layout="fill"
                        />
                </div>
                <div className={styles.image_phone}>
                <div className={styles.window_green}></div>
                    <Image
                        src="/assets/campagne/phone.png"
                        alt="Phone with emoticons"
                        layout="fill"
                    /> 
                </div>
            </section>

            <section className={styles.purple}>
                <div className={styles.window_purple}></div>
                <div className={styles.purple_flex}>
                    <div className={styles.purple_image}>
                        <Image 
                            src="/assets/campagne/computer.png"
                            alt="Computer in suit"
                            layout="fill"
                            />
                    </div>
                    <div className={styles.content}>
                        <h2 className={styles.subtitle}>"Dus ik heb zelf de controle in handen want het gaat over mijn gedrag?"</h2>
                        <p className={styles.highlight}>Neen,</p>
                        <p className={styles.paragraaf_white}>Dit is helaas niet het geval. De algoritmes zorgen ervoor dat deze clicks zodanig geanalyseerd worden waardoor je er als gebruiker geen controle meer over hebt. <br/> <br/> Het gaat hier over "extreme personalisatie", je ziet enkel berichten die jij leuk of interessant gaat vinden. Onbewust bevindt je je in je eigen onzichtbare filter bubble.</p>
                    </div>     
                </div>       
            </section>

            <section className={styles.information}>
                <div className={styles.intermezzo}> 
                <div className={styles.intermezzo_content}>
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
                   
                    <div className={styles.circles}></div>
                </div>

                <div className={styles.awareness}>
                    <h2 className={styles.awareness_subtitle}>Be aware of your bubble</h2>

                    <div className={styles.awareness_flex}>
                        <div className={styles.awareness_image}>
                            <Image 
                                src="/assets/campagne/awareness.png"
                                alt="Filter bubble"
                                layout="fill"
                                />
                        </div>
                        <p className={styles.awareness_content}>De filter bubble is te vergelijken met een spiegelpaleis. Je bent omringd door berichten en mensen die hetzelfde denken als jij. Maar dit zorgt ook voor "blind spots" aangezien je niet geconfronteerd wordt met tegenstrijdige ideeën. <br/> <br/> Je begeeft je in je eigen online wereld waar je geen controle hebt op de informatie die je krijgt. Dit zorgt ervoor dat je verschillende perspectieven mist en zelf niet kritisch omgaat met het raadplegen van nieuwsbronnen. <br/> Niemand is evenveel geïnformeerd waardoor er afwijkende ideeën ontstaan op vlak van politiek. De plitieke wereld zal nog meer polariseren, een bedreiging voor de democratie.</p>
                    </div>
                </div>
            </section>
        
            <section className={styles.examples}>
                <h2 className={styles.hidden}>Real Life Bubbles (gone wrong)</h2>

                <div className={styles.scroll_wrapper}>
                    <div className={styles.marquee}>
                        <p className={styles.scroll}>Real Life Bubbles (gone wrong) - Real Life Bubbles (gone wrong) - Real Life Bubbles (gone wrong)</p>
                        <p className={styles.scroll}>Real Life Bubbles (gone wrong) - Real Life Bubbles (gone wrong) - Real Life Bubbles (gone wrong)</p>
                    </div>
                </div>

                <div className={styles.examples_flex}>
                <article className={styles.trump}>
                    <div className={styles.example_header}>
                        <h3 className={styles.trump_title}> Verkiezingen Trump 2016</h3>
                        <div className={styles.trump_image}>
                            <Image 
                                src="/assets/campagne/trump.png"
                                alt="Trump"
                                width={200}
                                height={240}
                            />
                        </div>
                    </div>
                    <div className={styles.trump_content}>
                        <p className={styles.example_paragraaf}>Niemand had verwacht dat Trump de nieuwe president zou worden in 2016, en toch werd dit realiteit. <br/> <br/>De verklaring hiervoor is 'Trumpism' waarbij Trump-aanhangers online gesteund werden in hun opninies. <br/>Door de filter bubble kregen ze geen andere perspectieven te zien waardoor ze enkel extremer gingen denken - en uiteindelijk ook stemmen.</p>
                    </div>
                </article>

                <article className={styles.boris}>
                    <div className={styles.example_header}>
                        <h3 className={styles.boris_title}> Brexit Referendum 2016</h3>
                        <div className={styles.boris_image}>
                            <Image 
                                src="/assets/campagne/boris.png"
                                alt="Boris"
                                width={200}
                                height={240}
                            />
                        </div>
                    </div>
                    <div className={styles.boris_content}>
                        <p className={styles.example_paragraaf}>In 2016 was de kogel door de kerk, Engeland zal de EU verlaten.<br/> <br/>Twee kampen streden tegen elkaar: Pro-Leavers en Con-Leavers. <br/>Wat bleek, de eerste groep zag online enkel campagnes die hun mening versterkten: de EU verlaten. Geen enkel bericht met een tegenstrijdige mening. Allemaal te wijten aan de online filter bubble.</p>
                    </div>
                </article>
                </div>       
            </section>
        
            <section className={styles.tips}>
                <div className={styles.tips_subtitles}>
                    <h2 className={styles.subtitle_green}>Pop your Bubble</h2>
                    <p className={styles.subtitle_outline}>Pop your Bubble</p>
                    <p className={styles.subtitle_outline}>Pop your Bubble</p>
                </div>

                <article className={styles.tips_grid}>
                    <div className={styles.tips_header}>
                        <div className={styles.tips_image}>
                            <Image
                                src="/assets/campagne/ad-blocker.png"
                                alt="Ad Blocker"
                                layout="fill"
                            />
                        </div>
                        <p className={styles.tips_number}>1</p>
                    </div>
                    <div className={styles.tips_content}>
                        <div className={styles.window_green}></div>
                        <h3 className={styles.tips_title}>Say yes to ad-blockers</h3>
                        <p className={styles.tips_paragraaf}>Installeer een ad-block extensie op jouw computer zodat je minder blootgesteld wordt aan online advertenties.</p>
                    </div>
                </article>

                <article className={styles.tips_grid}>
                    <div className={styles.tips_header}>
                        <p className={styles.tips_number}>2</p>
                        <div className={styles.tips_image}>
                            <Image
                                src="/assets/campagne/anonymous.png"
                                alt="Anonymous"
                                layout="fill"
                            />      
                        </div>     
                    </div>
                    <div className={styles.tips_contentSecond}>
                        <div className={styles.window_green}></div>
                        <h3 className={styles.tips_title}>Browse anonymous</h3>
                        <p className={styles.tips_paragraaf}>Hello unknown! <br/>Als het internet niet weet wie je bent, kan het jouw gegevens ook niet opslaan.</p>
                    </div>
                </article>

                <article className={styles.tips_grid}>
                    <div className={styles.tips_header}>
                        <div className={styles.tips_image}>
                            <Image
                                src="/assets/campagne/cookies.png"
                                alt="Cookie Monster"
                                layout="fill"
                            />   
                        </div>
                        <p className={styles.tips_number}>3</p>        
                    </div>
                    <div className={styles.tips_content}>
                        <div className={styles.window_green}></div>
                        <h3 className={styles.tips_title}>Delete those cookies</h3>
                        <p className={styles.tips_paragraaf}>Cookie klinken misschien positief maar dat zijn ze niet. Cookies verzamelen data zonder dat je er vat op hebt. Weg ermee!</p>
                    </div>
                </article>
            </section>
        </article>

        <footer className={styles.footer}>
            <div className={styles.footer_cta}>
                <h2 className={styles.footer_title}>Share with your friends</h2>
                <div className={styles.footer_socials}>
                    <Image 
                        src="/assets/campagne/socials.png"
                        alt="Social Media Logo"
                        width={221}
                        height={51}
                        />
                </div>
            </div>
            <div className={styles.footer_link}>
                <Link href="/start">
                    <a className={styles.link}>Doe de stemtest opnieuw</a>
                </Link>
            </div>
            <div className={styles.footer_info}>
                <div className={styles.footer_image}>
                    <Image 
                        src="/assets/campagne/overheid.png"
                        alt="Logo Vlaamse Overheid"
                        width={96}
                        height={44}
                        />
                </div>
                <div className={styles.footer_names}>
                    <p className={styles.names_content}>Integration 4</p>
                    <p className={styles.names_content}>Amber Aspeslagh, Eline Claeys, Kaat Vermeire</p>
                </div>
            </div>
        </footer>
        </>
    )
}