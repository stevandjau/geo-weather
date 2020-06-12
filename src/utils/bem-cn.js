//follow convention of bem and keeping styling organized
const cn = (block, element, modifier) =>
	`${block}${element ? `__${element}` : ""}${modifier ? `-${modifier}` : ""}`;

export default cn;
