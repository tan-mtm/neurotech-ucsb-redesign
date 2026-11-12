import Reveal from "./reveal";
import NeuralSignal from "./neural-signal";
export default function PageHero({eyebrow,title,accent,body,action}:{eyebrow:string;title:string;accent?:string;body:string;action?:React.ReactNode}) { return <section className="hero grid-bg"><div className="container hero-grid"><Reveal className="hero-copy"><span className="eyebrow">{eyebrow}</span><h1 className="display display-sm">{title}</h1>{accent&&<h2 className="hero-accent">{accent}</h2>}</Reveal><Reveal><p className="body-lg muted-dark">{body}</p>{action}<NeuralSignal/></Reveal></div></section>; }
