{setTimeout(() => document.body.classList.add('render'), 60);
	//const navszdiscs = Array.from(document.querySelectorAll('nav.szdiscs > .szbtn2'));
	const sznavigate = (linkEl) => {document.body.classList.remove('render');	document.body.addEventListener('transitionend', () => window.location = linkEl.href);};
	//navszdiscs.forEach(link => link.addEventListener('click', (ev) => { ev.preventDefault(); sznavigate(ev.target);  }));
}
