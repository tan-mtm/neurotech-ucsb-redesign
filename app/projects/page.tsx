import Link from "next/link";
import PageHero from "../components/page-hero";
import NeuralSignal from "../components/neural-signal";
import Reveal from "../components/reveal";
import { projects } from "../content";

export default function Projects() { return <>
  <PageHero eyebrow="NeuroTech research" title="Projects" accent="Five active tracks. Real hardware. Real signals." body="From EEG-driven robotics and drones to optical brain-oxygen sensing and EEG-decoded music classification. Each project ships closed-loop systems with real demos." action={<div className="actions"><Link className="button button-gold" href="/apply">Join a project</Link></div>}/>
  <section className="section"><Reveal className="container split"><div><span className="eyebrow eyebrow-dark">Purpose</span><h2 className="heading">From theory to practice.</h2></div><p className="body-lg muted">Every track pairs experienced leads with new members, ships an end-to-end pipeline each quarter, and produces artifacts — repos, posters, papers, and demos — that members carry into internships, research, and graduate study.</p></Reveal></section>
  <section className="section section-ice"><div className="container"><Reveal><span className="eyebrow eyebrow-dark">Current projects</span><h2 className="heading">Building now</h2></Reveal><Reveal className="card-grid two">{projects.map(p=><Link href={p.href} className="glass card project-card" key={p.id}><div style={{display:"flex",justifyContent:"space-between",gap:"1rem"}}><span className="eyebrow eyebrow-dark">Project {p.id}</span><span className="tag">{p.status}</span></div><h3 className="subheading">{p.title}</h3><p className="body muted">{p.summary}</p><div style={{display:"flex",flexWrap:"wrap",gap:8,marginTop:"1.2rem"}}>{p.tags.map(t=><span className="tag" key={t}>{t}</span>)}</div><NeuralSignal/><span className="eyebrow eyebrow-dark">Lead · {p.lead}</span></Link>)}</Reveal></div></section>
  <section className="dark-cta grid-bg"><div className="container"><Reveal><span className="eyebrow eyebrow-gold">Build with us</span><h2 className="heading">Your next portfolio piece<br/>could start here.</h2></Reveal><Link className="button button-gold" href="/apply">Apply to join</Link></div></section>
  </>; }
