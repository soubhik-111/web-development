import React from 'react';

const HeroSection = () => {
  return (
    <header className="hero container">
        <div className="hero-content">
            <div className="intro-text">
                <p className="intro-text-title">Best Music Museum</p>
                <h1>
                    <p>Discover</p>
                    <p>Listen</p>
                    <p>Enjoy</p>
                </h1>
                <p className="intro-text-desc">With Musical Me, you can explore the best tunes. Discover new artists,
                    get
                    personalized playlist
                    recommendations, and enjoy high-quality streaming, all in one place. Dive into a world of music
                    where your taste matters most, and let us help you find your next favorite song.</p>
                <a href="#playlists" className="cta-button">Featured Playlists</a>
            </div>
            <div className="intro-image-container">
                <svg id="intro-img" width="652" height="665" viewBox="0 0 652 665" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path id="Vector"
                        d="M230.891 13.1371C150.197 -28.6588 99.8169 33.3975 41.771 140.924C24.6639 172.661 10.2215 210.15 3.83919 252.534C-3.88535 303.863 0.733582 359.106 11.5703 408.643C27.9142 483.344 59.0361 548.825 99.5537 584.664C153.5 584.664 206.5 584.664 256 584.664C278.825 565.679 274.389 541.307 299.457 536.242C337.83 528.493 370.294 581.543 405.022 611.416C428.794 631.864 454.942 641.833 480.813 651.5C510.145 662.468 541.188 673.116 569.566 656.039C593.069 641.887 612.143 609.597 624.789 571.832C637.435 534.066 644.186 491.031 648.594 447.879C651.358 420.797 653.253 393.037 651.009 365.839C648.673 337.428 641.877 310.551 633.014 286.536C613.012 232.274 582.699 191.789 549.932 162.789C517.165 133.79 481.773 115.438 446.513 97.7991C383.131 66.0174 339.501 29.5006 274.283 13.1371H230.891Z"
                        fill="url(#paint0_linear_0_1)" />
                    <g id="Group">
                        <path id="Vector_2"
                            d="M208.279 576.518L198.935 576.517L194.49 540.473L208.281 540.474L208.279 576.518Z"
                            fill="#A0616A" />
                        <path id="Vector_3"
                            d="M176.264 576.306C175.973 576.796 175.819 578.377 175.819 578.947C175.819 580.699 177.239 582.119 178.991 582.119H207.93C209.125 582.119 210.094 581.15 210.094 579.955V578.75C210.094 578.75 211.525 575.129 208.578 570.666C208.578 570.666 204.915 574.161 199.441 568.687L197.827 565.763L186.142 574.308L179.666 575.105C178.249 575.28 176.993 575.078 176.264 576.306Z"
                            fill="#2F2E41" />
                    </g>
                    <g id="Group_2">
                        <path id="Vector_4"
                            d="M166.411 576.518L157.067 576.517L152.621 540.473L166.413 540.474L166.411 576.518Z"
                            fill="#A0616A" />
                        <path id="Vector_5"
                            d="M134.396 576.306C134.105 576.796 133.951 578.377 133.951 578.947C133.951 580.699 135.371 582.119 137.123 582.119H166.062C167.257 582.119 168.225 581.15 168.225 579.955V578.75C168.225 578.75 169.657 575.129 166.709 570.666C166.709 570.666 163.046 574.161 157.573 568.687L155.958 565.763L144.274 574.308L137.798 575.105C136.381 575.28 135.124 575.078 134.396 576.306Z"
                            fill="#2F2E41" />
                    </g>
                    <path id="Vector_6"
                        d="M209.082 350.391L217.782 372.685L210.985 550.761H191.954L174.826 390.085L170.748 551.305L152.261 550.761L132.142 371.869L145.464 355.829L209.082 350.391Z"
                        fill="#2F2E41" />
                    <path id="Vector_7"
                        d="M168.029 223.971L190.866 222.339L197.935 233.758L219.141 239.739L211.257 294.929L219.685 377.307C219.685 377.307 189.235 372.957 187.06 381.657C184.885 390.356 131.598 372.957 131.598 372.957L149.814 316.679L148.182 272.636L143.289 247.08L165.582 236.749L168.029 223.971Z"
                        fill="#E6E6E6" />
                    <path id="Vector_8"
                        d="M157.698 240.283C157.698 240.283 139.5 240.011 137.044 247.624C134.589 255.236 126.433 307.979 126.433 307.979L120.18 331.088L148.182 317.223L142.201 307.994L161.776 270.461L157.698 240.283Z"
                        fill="#E6E6E6" />
                    <path id="Vector_9"
                        d="M168.831 324.835C171.84 324.838 174.637 323.104 175.807 320.332C176.692 318.235 176.609 316.224 175.947 314.499C176.16 314.411 176.371 314.319 176.589 314.241C176.269 314.111 175.957 313.964 175.646 313.818C174.562 311.657 172.484 310.089 170.009 309.709C166.943 306.424 165.058 302.024 165.039 297.181C164.998 287.199 173.095 278.862 183.074 278.622C183.152 278.621 183.231 278.619 183.309 278.618C187.778 278.567 191.831 281.066 194.095 284.919C195.416 287.167 197.857 288.676 200.654 288.676C202.795 288.676 204.726 287.791 206.107 286.367C209.115 283.265 212.882 280.957 217.145 280.248C219.944 279.783 222.842 279.608 225.806 279.755C246.099 280.764 263.557 298.749 263.991 319.062C264.473 341.687 246.278 360.179 223.763 360.179C212.048 360.179 201.507 355.169 194.156 347.177C190.892 343.629 186.319 341.641 181.498 341.691C181.449 341.691 181.4 341.691 181.351 341.691C173.543 341.691 167.214 335.362 167.214 327.554C167.214 327.121 167.235 326.693 167.275 326.271C167.351 325.481 168.038 324.834 168.831 324.835Z"
                        fill="#6C63FF" />
                    <path id="Vector_10"
                        d="M235.725 312.873L100.333 287.317L99.7892 297.104L234.094 329.185L235.725 312.873Z"
                        fill="#6C63FF" />
                    <path id="Vector_11"
                        d="M101.964 288.948L100.333 287.317C100.333 287.317 93.2643 284.054 93.2643 283.511C93.2643 283.17 82.8263 279.635 75.0169 277.037C70.6554 275.586 66.0495 278.457 65.4284 283.011L64.4498 290.188C63.8646 294.479 67.1024 298.342 71.4298 298.515L90.5456 299.279L99.7892 297.104L101.964 288.948Z"
                        fill="#6C63FF" />
                    <path id="Vector_12"
                        d="M235.453 315.863L235.776 314.509L100.297 288.608L100.061 290.307L235.453 315.863Z"
                        fill="#3F3D56" />
                    <path id="Vector_13"
                        d="M235.143 318.436L235.453 316.951L100.15 291.289L100.061 293.026L235.143 318.436Z"
                        fill="#3F3D56" />
                    <path id="Vector_14"
                        d="M234.833 321.518L234.91 319.126L100.044 293.241L100.061 294.657L234.833 321.518Z"
                        fill="#3F3D56" />
                    <path id="Vector_15"
                        d="M234.471 325.098L234.366 322.932L99.8471 295.193L99.7314 295.724L234.471 325.098Z"
                        fill="#3F3D56" />
                    <path id="Vector_16"
                        d="M234.469 327.269L234.366 325.651L100.049 296.09L99.9289 296.62L234.469 327.269Z"
                        fill="#3F3D56" />
                    <path id="Vector_17"
                        d="M156.67 236.816L163.407 233.086L166.329 292.754L165.31 300.095C165.31 300.095 148.302 253.196 156.67 236.816Z"
                        fill="#3F3D56" />
                    <path id="Vector_18"
                        d="M182.604 227.261C191.913 227.261 199.46 219.715 199.46 210.405C199.46 201.096 191.913 193.549 182.604 193.549C173.294 193.549 165.748 201.096 165.748 210.405C165.748 219.715 173.294 227.261 182.604 227.261Z"
                        fill="#A0616A" />
                    <path id="Vector_19"
                        d="M168.195 220.465L172.224 223.682L167.651 206.327C167.651 206.327 180.429 206.055 181.516 198.987C181.516 198.987 191.576 198.715 194.294 198.715C197.013 198.715 198.24 216.704 198.24 216.704C198.24 216.704 203.538 201.977 198.101 194.365C192.663 186.752 194.566 191.374 193.479 188.656C192.391 185.937 181.244 183.436 174.176 186.209C167.107 188.981 166.835 192.933 164.66 192.969C162.485 193.005 154.873 203.88 161.942 212.58C169.01 221.28 168.195 220.465 168.195 220.465Z"
                        fill="#2F2E41" />
                    <g id="guitar-hand">
                        <path id="Vector_20"
                            d="M216.807 322.078C218.805 320.484 220.277 318.57 221.107 316.679L241.099 302.695L234.166 293.377L214.633 308.566C212.605 308.955 210.412 309.965 208.414 311.56C203.85 315.201 202.029 320.508 204.346 323.413C206.664 326.317 212.243 325.72 216.807 322.078Z"
                            fill="#A0616A" />
                        <path id="Vector_21"
                            d="M210.441 244.274C210.441 244.274 215.335 236.117 220.229 241.011C224.101 244.884 245.337 269.524 254.033 279.641C256.43 282.431 257.747 285.985 257.747 289.664C257.747 295.354 254.605 300.58 249.58 303.248L222.404 317.679L214.791 306.26L238.172 289.404L202.285 269.83L210.441 244.274Z"
                            fill="#E6E6E6" />
                    </g>
                    <g id="hand-chord">
                        <path id="Vector_22"
                            d="M140.214 300.806C138.731 302.888 137.842 305.133 137.565 307.179L122.189 326.122L131.417 333.175L146.02 313.2C147.863 312.268 149.693 310.693 151.175 308.611C154.562 303.854 154.854 298.251 151.827 296.096C148.8 293.941 143.601 296.05 140.214 300.806Z"
                            fill="#A0616A" />
                        <path id="Vector_23"
                            d="M124.508 318.436L120.18 331.088L132.686 337.613L142.201 331.088L148.182 317.223L130.511 312.057"
                            fill="#E6E6E6" />
                    </g>
                    <path id="Vector_24"
                        d="M334.01 215L292.931 226.159L298.908 252.814C296.975 251.517 294.651 250.759 292.148 250.759C285.439 250.759 280 256.198 280 262.907C280 269.617 285.439 275.056 292.148 275.056C298.858 275.056 304.297 269.617 304.297 262.907C304.297 260.575 303.628 258.404 302.489 256.554L297.75 235.421L333.188 224.28L336.429 240.022C334.484 238.699 332.136 237.924 329.606 237.924C322.896 237.924 317.457 243.363 317.457 250.072C317.457 256.781 322.896 262.22 329.606 262.22C336.315 262.22 341.754 256.781 341.754 250.072C341.754 247.715 341.072 245.523 339.91 243.66L334.01 215Z"
                        fill="white" />
                    <path id="Vector_25"
                        d="M380.022 185C373.383 185 368 190.383 368 197.022C368 198.899 368.442 200.669 369.21 202.251L376.071 230.555L379.966 229.611L374.673 207.777C376.286 208.581 378.098 209.044 380.022 209.044C386.662 209.044 392.044 203.662 392.044 197.022C392.044 190.383 386.662 185 380.022 185Z"
                        fill="#F8F8F8" />
                    <path id="Vector_26"
                        d="M450.022 185C443.383 185 438 190.383 438 197.022C438 198.899 438.442 200.669 439.21 202.251L446.071 230.555L449.966 229.611L444.673 207.777C446.286 208.581 448.098 209.044 450.022 209.044C456.662 209.044 462.044 203.662 462.044 197.022C462.044 190.383 456.662 185 450.022 185Z"
                        fill="white" />
                    <path id="Vector_27"
                        d="M425.771 265.243L418.96 238L414.824 238.972L420.152 260.281C418.514 259.539 416.692 259.113 414.764 259.113C407.715 259.113 402 264.654 402 271.489C402 278.324 407.715 283.865 414.764 283.865C421.814 283.865 427.529 278.324 427.529 271.489C427.529 269.208 426.881 267.078 425.771 265.243Z"
                        fill="white" />
                    <path id="Vector_28"
                        d="M515.771 256.243L508.96 229L504.824 229.972L510.152 251.281C508.514 250.539 506.692 250.113 504.764 250.113C497.715 250.113 492 255.654 492 262.489C492 269.324 497.715 274.865 504.764 274.865C511.814 274.865 517.529 269.324 517.529 262.489C517.529 260.208 516.881 258.078 515.771 256.243Z"
                        fill="white" />
                    <g id="plant">
                        <g id="Group_3">
                            <path id="Vector_29"
                                d="M564.988 550.815C564.001 549.15 559.728 550.933 558.942 549.421C558.159 547.915 562.13 545.621 564.398 540.379C564.807 539.433 567.384 533.476 565.476 531.638C561.859 528.154 545.308 542.532 539.516 537.827C538.245 536.794 537.357 534.733 533.51 531.386C531.98 530.055 531.054 529.453 530.159 529.677C528.888 529.994 528.787 531.695 527.424 535.04C525.381 540.055 524.172 539.752 522.981 543.754C522.097 546.724 522.299 548.451 521.259 548.788C519.787 549.264 518.432 546.113 516.567 546.395C514.663 546.683 513.512 550.352 513.149 553.098C512.467 558.253 514.359 561.654 515.409 565.23C516.549 569.117 517.225 575.028 514.592 583.395L488.532 656.821C494.285 641.755 510.944 600.452 517.944 585.104C519.965 580.673 522.196 576.179 526.777 574.406C531.188 572.698 537.246 573.717 544.969 571.857C545.871 571.64 548.374 571.003 548.689 569.531C548.949 568.314 547.477 567.634 547.703 566.494C548.006 564.965 550.902 564.947 554.459 563.183C556.968 561.939 558.531 560.459 559.875 559.187C560.28 558.804 566.303 553.032 564.988 550.815Z"
                                fill="#F2F2F2" />
                            <path id="Vector_30"
                                d="M462.458 589.47C461.355 589.474 460.998 592.086 460.029 592.035C459.064 591.985 459.083 589.374 457.165 586.748C456.819 586.275 454.639 583.291 453.186 583.697C450.433 584.467 452.714 596.739 448.734 598.224C447.86 598.55 446.592 598.391 443.839 599.314C442.744 599.681 442.182 599.961 442.033 600.465C441.823 601.181 442.628 601.721 443.877 603.355C445.748 605.805 445.251 606.311 446.871 608.05C448.074 609.341 448.98 609.74 448.845 610.348C448.654 611.207 446.717 610.963 446.317 611.96C445.909 612.978 447.378 614.601 448.621 615.572C450.954 617.394 453.169 617.446 455.227 617.963C457.464 618.525 460.56 619.898 463.907 623.605L492.426 657.581C486.691 650.41 471.226 630.317 465.713 622.453C464.122 620.183 462.56 617.791 463.011 615.031C463.445 612.373 465.694 609.694 467.009 605.367C467.162 604.861 467.572 603.449 466.94 602.87C466.418 602.391 465.66 602.917 465.166 602.477C464.503 601.887 465.329 600.461 465.49 598.206C465.603 596.616 465.328 595.422 465.091 594.395C465.02 594.086 463.925 589.464 462.458 589.47Z"
                                fill="#F2F2F2" />
                            <path id="Vector_31"
                                d="M484.45 594.407L483.786 588.478L484.089 588.028C485.494 585.95 486.209 583.92 486.218 581.993C486.219 581.687 486.205 581.381 486.191 581.069C486.134 579.832 486.062 578.294 486.864 576.502C487.313 575.503 488.576 573.19 490.474 573.476C490.985 573.548 491.371 573.783 491.665 574.057C491.707 573.989 491.752 573.92 491.799 573.846C492.39 572.944 492.858 572.557 493.309 572.185C493.656 571.899 494.013 571.604 494.575 570.905C494.821 570.599 495.013 570.33 495.174 570.104C495.665 569.42 496.307 568.604 497.437 568.618C498.646 568.675 499.278 569.674 499.698 570.336C500.446 571.515 500.786 572.365 501.01 572.929C501.092 573.136 501.185 573.367 501.232 573.439C501.621 574.012 504.786 573.476 505.979 573.282C508.657 572.835 510.974 572.449 511.929 574.138C512.613 575.346 512.105 576.943 510.373 579.013C509.834 579.657 509.26 580.147 508.75 580.53C509.172 580.782 509.55 581.169 509.703 581.776C510.064 583.213 508.829 584.653 506.033 586.061C505.339 586.413 504.404 586.883 503.094 587.109C502.478 587.215 501.922 587.241 501.447 587.255C501.437 587.53 501.372 587.828 501.205 588.134C500.714 589.036 499.692 589.465 498.152 589.362C496.457 589.273 495.061 588.95 493.83 588.667C492.755 588.42 491.829 588.211 491.102 588.26C489.754 588.369 488.714 589.448 487.495 590.848L484.45 594.407Z"
                                fill="#F2F2F2" />
                            <path id="Vector_32"
                                d="M487.531 559.106L481.965 561.252L481.453 561.072C479.086 560.241 476.941 560.064 475.075 560.544C474.779 560.62 474.486 560.712 474.188 560.805C473.006 561.174 471.537 561.633 469.6 561.312C468.52 561.131 465.962 560.497 465.758 558.588C465.697 558.076 465.826 557.642 466.018 557.289C465.94 557.265 465.863 557.239 465.779 557.212C464.756 556.869 464.264 556.514 463.789 556.173C463.425 555.91 463.049 555.639 462.231 555.273C461.872 555.113 461.563 554.996 461.303 554.896C460.517 554.595 459.565 554.182 459.292 553.084C459.041 551.901 459.847 551.036 460.38 550.462C461.331 549.439 462.068 548.895 462.556 548.535C462.735 548.403 462.935 548.255 462.993 548.191C463.448 547.669 462.127 544.743 461.636 543.639C460.525 541.162 459.563 539.018 460.955 537.666C461.95 536.698 463.624 536.784 466.066 537.935C466.826 538.293 467.445 538.724 467.945 539.12C468.082 538.648 468.36 538.184 468.908 537.882C470.207 537.169 471.913 537.998 473.984 540.345C474.501 540.927 475.192 541.712 475.743 542.922C476.002 543.492 476.168 544.023 476.302 544.479C476.571 544.419 476.875 544.405 477.214 544.49C478.211 544.736 478.885 545.616 479.176 547.132C479.52 548.793 479.562 550.225 479.6 551.488C479.634 552.59 479.667 553.539 479.898 554.23C480.346 555.507 481.653 556.238 483.317 557.063L487.531 559.106Z"
                                fill="#F2F2F2" />
                            <path id="Vector_33"
                                d="M484.45 541.639L483.786 535.71L484.089 535.26C485.494 533.182 486.209 531.152 486.218 529.225C486.219 528.919 486.205 528.613 486.191 528.301C486.134 527.064 486.062 525.527 486.864 523.734C487.313 522.735 488.576 520.422 490.474 520.708C490.985 520.78 491.371 521.015 491.665 521.29C491.707 521.221 491.752 521.152 491.799 521.078C492.39 520.176 492.858 519.789 493.309 519.417C493.656 519.131 494.013 518.836 494.575 518.138C494.821 517.831 495.013 517.562 495.174 517.336C495.665 516.652 496.307 515.836 497.437 515.85C498.646 515.907 499.278 516.907 499.698 517.568C500.446 518.747 500.786 519.598 501.01 520.162C501.092 520.368 501.185 520.6 501.232 520.671C501.621 521.244 504.786 520.708 505.979 520.514C508.657 520.067 510.974 519.681 511.929 521.37C512.613 522.578 512.105 524.175 510.373 526.245C509.834 526.889 509.26 527.379 508.75 527.762C509.172 528.014 509.55 528.401 509.703 529.008C510.064 530.445 508.829 531.885 506.033 533.293C505.339 533.646 504.404 534.115 503.094 534.341C502.478 534.447 501.922 534.473 501.447 534.487C501.437 534.762 501.372 535.06 501.205 535.366C500.714 536.268 499.692 536.697 498.152 536.594C496.457 536.506 495.061 536.182 493.83 535.899C492.755 535.652 491.829 535.443 491.102 535.492C489.754 535.601 488.714 536.68 487.495 538.08L484.45 541.639Z"
                                fill="#F2F2F2" />
                            <path id="Vector_34"
                                d="M490.517 656.725L489.274 655.946L487.825 656.112C487.803 655.978 487.724 655.668 487.605 655.185C486.957 652.534 484.98 644.466 483.331 631.761C482.18 622.892 481.529 613.774 481.394 604.655C481.26 595.523 481.692 588.609 482.038 583.052C482.3 578.861 482.618 574.87 482.93 570.983C483.76 560.596 484.543 550.785 483.961 539.924C483.832 537.499 483.561 532.452 480.613 527.081C478.902 523.966 476.546 521.201 473.609 518.865L475.435 516.569C478.677 519.151 481.284 522.214 483.183 525.673C486.453 531.627 486.748 537.127 486.889 539.769C487.482 550.823 486.69 560.728 485.852 571.215C485.542 575.088 485.225 579.062 484.964 583.236C484.62 588.741 484.192 595.595 484.326 604.61C484.457 613.619 485.101 622.626 486.237 631.383C487.866 643.928 489.814 651.875 490.454 654.486C490.794 655.88 490.866 656.172 490.517 656.725Z"
                                fill="#F2F2F2" />
                            <path id="Vector_35"
                                d="M468.232 523.523C468.112 523.523 467.99 523.52 467.867 523.511C465.371 523.377 463.059 521.882 460.995 519.071C460.027 517.748 459.532 516.239 458.544 513.231C458.391 512.767 457.647 510.414 457.194 507.176C456.898 505.06 456.935 504.175 457.355 503.394C457.82 502.524 458.573 501.917 459.42 501.507C459.383 501.227 459.413 500.938 459.535 500.643C460.034 499.42 461.363 499.581 462.081 499.658C462.445 499.704 462.899 499.764 463.388 499.738C464.158 499.701 464.572 499.472 465.199 499.128C465.799 498.799 466.544 498.39 467.651 498.164C469.832 497.708 471.66 498.327 472.263 498.53C475.434 499.586 476.997 502.051 478.806 504.906C479.167 505.478 480.405 507.562 481.222 510.419C481.812 512.481 481.729 513.397 481.552 514.078C481.191 515.478 480.339 516.28 478.176 518.049C475.917 519.901 474.784 520.829 473.81 521.393C471.544 522.701 470.122 523.523 468.232 523.523Z"
                                fill="#F2F2F2" />
                        </g>
                        <path id="Vector_36"
                            d="M495.5 502C497.985 502 500 499.985 500 497.5C500 495.015 497.985 493 495.5 493C493.015 493 491 495.015 491 497.5C491 499.985 493.015 502 495.5 502Z"
                            fill="white" />
                        <path id="Vector_37"
                            d="M442.5 578C444.985 578 447 575.985 447 573.5C447 571.015 444.985 569 442.5 569C440.015 569 438 571.015 438 573.5C438 575.985 440.015 578 442.5 578Z"
                            fill="white" />
                        <path id="Vector_38"
                            d="M459.5 483C461.985 483 464 480.985 464 478.5C464 476.015 461.985 474 459.5 474C457.015 474 455 476.015 455 478.5C455 480.985 457.015 483 459.5 483Z"
                            fill="white" />
                        <path id="Vector_39"
                            d="M531.5 507C533.985 507 536 504.985 536 502.5C536 500.015 533.985 498 531.5 498C529.015 498 527 500.015 527 502.5C527 504.985 529.015 507 531.5 507Z"
                            fill="white" />
                    </g>
                    <defs>
                        <linearGradient id="paint0_linear_0_1" x1="577.531" y1="125.69" x2="-44.9847" y2="367.561"
                            gradientUnits="userSpaceOnUse">
                            <stop stop-color="#CC00FF" stop-opacity="0.73" />
                            <stop offset="1" stop-color="#120B85" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </div>
    </header>
  )
  // return (
  //   <div className='container'>
  //     <section className="hero-section">
  //     <div className="content">
  //       <h1>Welcome to Expense Tracker</h1>
  //       <p>Track your expenses effortlessly and efficiently.</p>
  //       <a href="#get-started" className="btn">Get Started</a>
  //     </div>
  //     </section>
  //   </div>
  // );
}

export default HeroSection;