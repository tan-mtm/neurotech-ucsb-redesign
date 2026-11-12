import Link from "next/link";
import PageHero from "../components/page-hero";
import NeuralOrbit from "../components/neural-orbit";
import Reveal from "../components/reveal";

const ways = [
  ["01","Project Teams","Build closed-loop systems with experienced leads and new members."],
  ["02","Publications","Capture what the club learns through articles, podcast, and newsletter."],
  ["03","Conference","Help bring workshops, demos, and CNTC to a wider community."],
];
const majors=["Neuroscience","ECE","Computer Science","Mechanical Engineering","Art","Psychology"];

export default function Apply() { return <>
  <PageHero eyebrow="Get involved" title="Bring your curiosity." accent="Leave with a portfolio." body="Members come from every major — neuroscience, ECE, CS, ME, art, psychology. What matters is that you want to build." action={<div className="actions"><a className="button button-gold" href="mailto:neurotech@ucsb.edu?subject=Joining NeuroTech @ UCSB">Apply to join</a></div>}/>
  <section className="section section-ice"><div className="container"><Reveal><span className="eyebrow eyebrow-dark">Find your place</span><h2 className="heading">Three ways to contribute</h2></Reveal><Reveal className="card-grid">{ways.map(([id,title,body])=><article className="glass card" key={id}><span className="number">{id}</span><h3 className="subheading">{title}</h3><p className="body muted">{body}</p></article>)}</Reveal><Reveal className="glass-dark card recruit-card"><span className="eyebrow">Recruiting</span><h3 className="heading">We recruit each quarter.</h3><p className="body muted-dark">Choose the track that fits your interests. Experience helps, but curiosity and commitment matter most.</p></Reveal></div></section>
  <section className="section"><Reveal className="container split"><div><span className="eyebrow eyebrow-dark">Who this is for</span><h2 className="heading">You don’t need one “right” major.</h2></div><div><div className="major-grid">{majors.map(m=><span className="tag" key={m}>{m}</span>)}</div><p className="body-lg muted" style={{marginTop:"2rem"}}>What matters is that you want to build.</p></div></Reveal></section>
  <section className="hero grid-bg"><div className="container hero-grid"><Reveal><span className="eyebrow eyebrow-gold">Ready when you are</span><h2 className="display display-sm">Build something<br/>that reads the brain.</h2><p className="body-lg muted-dark">Join a project team, learn from peers and mentors, and ship real work.</p><div className="actions"><a className="button button-gold" href="mailto:neurotech@ucsb.edu?subject=Joining NeuroTech @ UCSB">Apply to join</a><Link className="button button-outline" href="/projects">Explore projects</Link></div></Reveal><NeuralOrbit/></div></section>
  </>; }
