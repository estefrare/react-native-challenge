import * as React from "react";
import { SvgCss } from "react-native-svg";

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="10" height="12" viewBox="0 0 10 12" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.293153 6.29321C0.105447 6.48074 0 6.73505 0 7.00021C0 7.26538 0.105447 7.51969 0.293153 7.70721L4.29816 11.7072C4.48592 11.8947 4.74055 12 5.00604 12C5.27154 12 5.52617 11.8947 5.71393 11.7072L9.71894 7.70721C9.90132 7.51861 10.0022 7.26601 9.99996 7.00381C9.99768 6.74162 9.89238 6.4908 9.70674 6.3054C9.5211 6.11999 9.26997 6.01482 9.00745 6.01254C8.74492 6.01026 8.49201 6.11106 8.30317 6.29321L6.0073 8.58621V1.00021C6.0073 0.734997 5.90181 0.480643 5.71404 0.293107C5.52627 0.105571 5.27159 0.000213623 5.00604 0.000213623C4.7405 0.000213623 4.48582 0.105571 4.29805 0.293107C4.11028 0.480643 4.00479 0.734997 4.00479 1.00021V8.58621L1.70892 6.29321C1.52116 6.10574 1.26653 6.00043 1.00104 6.00043C0.735542 6.00043 0.480915 6.10574 0.293153 6.29321Z" fill="#F33A3A"/>
</svg>`;

const RedArrowDown = () => <SvgCss xml={svg} />;

export default RedArrowDown;