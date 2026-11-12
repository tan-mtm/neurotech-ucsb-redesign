import Link from "next/link";
import PageHero from "../components/page-hero";
import NeuralSignal from "../components/neural-signal";
import Reveal from "../components/reveal";
import { exploreItems } from "../content";

const paths = [
  ["Path 01","New to neurotech","Start with workshops, the podcast, and frequently asked questions.","Explore resources"],
  ["Path 02","Ready to build","Explore current projects, then join a project team.","View projects"],
  ["Path 03","Follow the field","Read articles, subscribe to the newsletter, and attend CNTC.","See updates"],
];

export default function Explore() { return <>
  <PageHero eyebrow="Knowledge hub" title="Explore" accent="Learn what we build. Build what you learn." body="Workshops, publications, conversations, and events that make neurotechnology reachable beyond the lab."/>
  <section className="section section-ice"><div className="container"><Reveal><span className="eyebrow eyebrow-dark">Browse the hub</span><h2 className="heading">Start with your curiosity</h2></Reveal><Reveal className="directory">{exploreItems.map(([id,title,body,tag],i)=><article className={`${i===0?"glass-dark featured":"glass"} card`} key={id}><div style={{display:"flex",justifyContent:"space-between"}}><span className="number">{id}</span><span className="tag">{tag}</span></div><h3 className="subheading">{title}</h3><p className={`body ${i===0?"muted-dark":"muted"}`}>{body}</p><NeuralSignal gold={i===0}/></article>)}</Reveal></div></section>
  <section className="section"><div className="container"><Reveal><span className="eyebrow eyebrow-dark">Suggested paths</span><h2 className="heading">Choose a way in</h2></Reveal><Reveal className="card-grid">{paths.map(([id,title,body,cta],i)=><article className="glass card" key={id}><span className="eyebrow eyebrow-dark">{id}</span><h3 className="subheading">{title}</h3><p className="body muted">{body}</p><Link className="button button-navy" href={i===1?"/projects":"/explore"}>{cta}</Link></article>)}</Reveal></div></section>
  <section className="dark-cta grid-bg"><div className="container"><Reveal><span className="eyebrow eyebrow-gold">Open to every major</span><h2 className="heading">Curiosity is the prerequisite.</h2></Reveal><Link className="button button-gold" href="/apply">Join us</Link></div></section>
  </>; }
