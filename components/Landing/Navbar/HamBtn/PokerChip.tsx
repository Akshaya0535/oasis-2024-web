import Image from "next/image";
import Chip from "@/public/Chip.png";

import { forwardRef } from "react";

interface HamPokerChipProps {
  svgClass: string;
  isHamOpen: boolean;
}

const HamPokerChip = forwardRef<SVGSVGElement | any, HamPokerChipProps>(
  ({ svgClass, isHamOpen }, ref) => {
    return (
      <>
        {!isHamOpen ? (
          <svg
            className={svgClass}
            style={{ scale: "1" }}
            viewBox="0 0 91 91"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            ref={ref}
          >
            <g filter="url(#filter0_d_1964_6826)">
              <circle
                cx="45.0386"
                cy="45.9351"
                r="34.8756"
                stroke="#EDCF89"
                strokeWidth="0.306546"
              />
              <mask
                id="mask0_1964_6826"
                maskUnits="userSpaceOnUse"
                x="8"
                y="9"
                width="74"
                height="74"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M40.8652 20.6755C42.2232 20.4528 43.6171 20.3371 45.0381 20.3371C46.4097 20.3371 47.7561 20.445 49.0694 20.6527L50.9804 9H38.9971L40.8652 20.6755ZM30.0203 25.2033L23.1186 15.5632L14.6324 24.0239L24.2431 31.0054C25.8461 28.7764 27.7985 26.8156 30.0203 25.2033ZM59.9909 25.1564L66.8591 15.5632L75.3453 24.0239L65.7992 30.9584C64.187 28.7272 62.2239 26.7663 59.9909 25.1564ZM70.3172 41.8911C70.5262 43.2079 70.6347 44.5581 70.6347 45.9337C70.6347 47.3505 70.5196 48.7403 70.2982 50.0945L81.9776 51.9566L81.9709 39.9733L70.3172 41.8911ZM65.7229 61.014C64.1042 63.2304 62.138 65.1768 59.9044 66.7731L66.8591 76.4076L75.3453 67.9468L65.7229 61.014ZM49.0528 71.2173C47.7448 71.4233 46.4039 71.5303 45.0381 71.5303C43.6227 71.5303 42.2342 71.4154 40.8813 71.1945L38.9971 82.9709H50.9804L49.0528 71.2173ZM30.1068 66.7266C27.8844 65.1278 25.9288 63.1816 24.3194 60.9675L14.6324 67.9468L23.1185 76.4076L30.1068 66.7266ZM19.78 50.1072C19.5573 48.749 19.4414 47.3549 19.4414 45.9337C19.4414 44.5734 19.5476 43.2379 19.752 41.9349L8 40.0143L8.00665 51.9976L19.78 50.1072Z"
                  fill="#D9D9D9"
                />
              </mask>
              <g mask="url(#mask0_1964_6826)">
                <circle cx="45.0391" cy="45.935" r="35.0289" fill="#EDCF89" />
              </g>
              <circle
                cx="45.038"
                cy="45.9345"
                r="25.4433"
                stroke="#EDCF89"
                strokeWidth="0.306546"
              />
              <circle
                cx="45.0388"
                cy="45.9353"
                r="22.8377"
                stroke="#EDCF89"
                strokeWidth="0.613093"
                strokeDasharray="6.13 6.13"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_1964_6826"
                x="0.00976562"
                y="0.906128"
                width="90.0581"
                height="90.0579"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.894118 0 0 0 0 0.745098 0 0 0 0 0.356863 0 0 0 0.3 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_1964_6826"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_1964_6826"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        ) : (
          // <div
          //   className={svgClass}
          //   ref={ref}
          //   // style={{ scale: "0.112", transform: "rotate(90deg)" }}
          // >
          //   <Image
          //     src={Chip}
          //     alt="chip"
          //     width={890}
          //     height={890}
          //     style={{ scale: "0.112" }}
          //     // ref={ref}
          //   />
          // </div>
          <svg
            width="11270"
            height="11330"
            viewBox="0 0 1127 1133"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            ref={ref}
            className={svgClass}
            style={{ transform: "rotate(90deg)" }}
          >
            <g filter="url(#filter0_d_2_4)">
              <circle
                cx="561.925"
                cy="565.634"
                r="422.792"
                transform="rotate(-87.0299 561.925 565.634)"
                fill="url(#paint0_linear_2_4)"
                stroke="#EDCF89"
                stroke-width="3.71621"
              />
              <mask
                id="mask0_2_4"
                maskUnits="userSpaceOnUse"
                x="120"
                y="118"
                width="885"
                height="901"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M252.706 539.598L120.375 527.365L126.847 686.442L263.002 649.25C254.172 617.664 250.238 584.128 252.031 549.565C252.204 546.227 252.43 542.904 252.706 539.598ZM311.323 748.665L199.329 829.799L302.429 935.853L383.91 819.862C355.939 800.237 331.414 776.139 311.323 748.665ZM495.76 868.861L464.851 1011.19L609.931 1018.64L594.373 874.29C578.494 875.94 562.283 876.383 545.839 875.53C528.716 874.642 511.989 872.381 495.76 868.861ZM706.07 840.486C747.469 916.917 778.251 973.503 778.251 973.503L923.238 849.268C923.238 849.268 873.052 810.669 805.196 758.307C778.299 792.212 744.508 820.279 706.07 840.486ZM864.851 633.098L1004.38 662.91L1003.84 465.653L864.784 497.752C870.802 524.665 873.304 552.834 871.805 581.722C870.893 599.302 868.534 616.463 864.851 633.098ZM804.078 371.611L916.519 280.867L767.999 148.877L699.528 287.433C740.362 307.655 775.972 336.558 804.078 371.611ZM587.315 256.378L598.903 118.082L417.798 148.877L460.168 272.409C496.934 259.637 536.733 253.615 577.996 255.756C581.116 255.918 584.223 256.126 587.315 256.378ZM359.165 330.739C299.978 270.282 253.569 227.828 253.569 227.828L155.807 358.252C155.807 358.252 214.312 380.073 290.722 414.697C308.528 382.763 331.783 354.38 359.165 330.739Z"
                  fill="#D9D9D9"
                />
              </mask>
              <g mask="url(#mask0_2_4)">
                <g filter="url(#filter1_d_2_4)">
                  <circle
                    cx="561.922"
                    cy="565.635"
                    r="424.65"
                    transform="rotate(-87.0299 561.922 565.635)"
                    fill="#EDCF89"
                  />
                </g>
              </g>
              <path
                d="M579.79 216.365C772.449 226.361 920.527 390.646 910.531 583.306C900.535 775.966 736.25 924.044 543.59 914.048C350.93 904.052 202.852 739.766 212.848 547.107C222.845 354.447 387.13 206.369 579.79 216.365Z"
                fill="url(#paint1_linear_2_4)"
                stroke="#EDCF89"
                stroke-width="3.71621"
              />
              <path
                d="M476.225 257.294C497.797 251.308 520.261 247.533 543.349 246.22C543.401 247.173 544.214 247.905 545.167 247.856C554.04 247.399 563.004 247.308 572.045 247.597C581.086 247.886 590.026 248.549 598.851 249.571C599.799 249.681 600.657 249.003 600.77 248.055C623.727 250.84 645.905 256.041 667.051 263.392C666.735 264.292 667.207 265.279 668.107 265.597C685.129 271.618 701.471 279.042 716.999 287.725C717.832 288.191 718.885 287.895 719.353 287.063C739.223 298.317 757.752 311.629 774.658 326.699C774.022 327.41 774.08 328.502 774.789 329.141C788.1 341.136 800.386 354.233 811.507 368.283C812.099 369.032 813.185 369.159 813.935 368.569C827.895 386.404 839.997 405.745 849.959 426.293C849.099 426.706 848.736 427.738 849.148 428.599C856.822 444.65 863.188 461.433 868.11 478.805C868.37 479.723 869.324 480.257 870.243 480C876.228 501.572 880.003 524.036 881.316 547.124C880.363 547.176 879.631 547.989 879.681 548.942C880.137 557.815 880.228 566.779 879.939 575.82C879.65 584.861 878.987 593.801 877.965 602.626C877.855 603.574 878.534 604.432 879.481 604.545C876.697 627.502 871.495 649.68 864.145 670.826C863.244 670.51 862.258 670.982 861.939 671.882C855.918 688.904 848.495 705.246 839.811 720.774C839.345 721.607 839.641 722.66 840.473 723.128C829.219 742.998 815.908 761.527 800.837 778.433C800.127 777.797 799.034 777.855 798.395 778.564C786.4 791.875 773.303 804.161 759.253 815.282C758.505 815.874 758.377 816.96 758.967 817.71C741.133 831.671 721.792 843.772 701.244 853.734C700.83 852.874 699.798 852.511 698.937 852.923C682.886 860.598 666.103 866.963 648.732 871.885C647.813 872.145 647.279 873.099 647.537 874.018C625.965 880.003 603.5 883.778 580.412 885.091C580.36 884.138 579.547 883.407 578.594 883.456C569.722 883.912 560.757 884.003 551.716 883.714C542.676 883.425 533.735 882.762 524.91 881.74C523.962 881.63 523.104 882.309 522.992 883.256C500.034 880.472 477.857 875.27 456.711 867.92C457.026 867.019 456.554 866.033 455.654 865.715C438.633 859.693 422.291 852.27 406.762 843.586C405.929 843.12 404.876 843.417 404.408 844.248C384.538 832.994 366.01 819.683 349.103 804.612C349.74 803.902 349.682 802.809 348.973 802.17C335.661 790.175 323.375 777.078 312.255 763.028C311.662 762.28 310.576 762.152 309.826 762.742C295.866 744.908 283.764 725.567 273.802 705.019C274.662 704.605 275.025 703.573 274.613 702.712C266.939 686.661 260.574 669.878 255.652 652.507C255.391 651.588 254.437 651.054 253.518 651.312C247.533 629.74 243.758 607.275 242.445 584.187C243.398 584.135 244.13 583.322 244.081 582.369C243.624 573.497 243.533 564.532 243.822 555.492C244.111 546.451 244.774 537.511 245.796 528.685C245.906 527.737 245.228 526.879 244.28 526.767C247.065 503.809 252.266 481.632 259.617 460.486C260.517 460.802 261.503 460.329 261.822 459.429C267.843 442.408 275.267 426.066 283.95 410.537C284.416 409.704 284.12 408.651 283.288 408.183C294.542 388.313 307.854 369.785 322.924 352.878C323.635 353.515 324.727 353.457 325.366 352.748C337.361 339.436 350.458 327.15 364.508 316.03C365.257 315.437 365.384 314.351 364.794 313.601C382.629 299.641 401.969 287.539 422.518 277.577C422.931 278.437 423.963 278.8 424.824 278.388C440.875 270.714 457.658 264.349 475.029 259.427C475.948 259.166 476.482 258.212 476.225 257.294Z"
                stroke="#EDCF89"
                stroke-width="3.46262"
                stroke-linecap="round"
                stroke-dasharray="49.56 65.72"
              />
            </g>
            <path
              d="M198.002 479.171C199.557 479.347 201.075 479.167 202.556 478.622C204.48 477.918 206.071 476.73 207.294 475.036C207.86 474.249 208.309 473.396 208.606 472.468C209.686 469.076 209.126 465.988 207.059 463.205C205.996 461.777 204.621 460.752 203.017 460.059C202.531 459.847 202.023 459.697 201.537 459.528C201.59 459.535 201.668 459.532 201.747 459.545C202.992 459.748 204.234 459.712 205.47 459.429C208.127 458.82 210.26 457.385 211.79 455.037C212.559 453.853 213.032 452.544 213.236 451.136C213.523 449.163 213.241 447.29 212.407 445.516C211.583 443.753 210.35 442.359 208.749 441.314C207.5 440.504 206.141 440.004 204.676 439.767C202.196 439.372 199.762 439.658 197.354 440.358C195.696 440.837 194.107 441.499 192.545 442.252C190.745 443.119 189.007 444.103 187.294 445.138C185.044 446.501 182.807 447.89 180.55 449.243C178.569 450.428 176.547 451.53 174.398 452.355C173.642 452.645 172.856 452.863 172.082 453.112C172.038 453.126 171.994 453.14 171.936 453.156C171.962 453.185 171.984 453.209 172.007 453.228C173.51 454.421 174.791 455.844 175.992 457.344C177.208 458.861 178.32 460.46 179.422 462.065C180.882 464.203 182.331 466.352 183.824 468.464C185.315 470.566 186.933 472.563 188.792 474.339C190.164 475.655 191.654 476.803 193.336 477.682C194.145 478.103 194.982 478.455 195.858 478.711C196.059 478.768 196.253 478.837 196.454 478.899L197.43 479.106C197.617 479.123 197.8 479.138 197.986 479.159L198.002 479.171Z"
              fill="#EDCF89"
            />
            <path
              d="M206.142 717.072L194.76 740.017L219.647 746.083L231.023 723.136L206.142 717.072Z"
              fill="#EDCF89"
            />
            <path
              d="M282.018 859.616L282.936 859.585C285.143 859.511 287.614 857.865 290.713 854.41L291.05 854.035L290.548 854.164C287.688 854.898 284.584 854.337 282.03 852.623C277.314 849.459 275.87 843.314 278.812 838.93C281.754 834.546 287.988 833.553 292.703 836.717C292.965 836.893 293.223 837.084 293.472 837.279L293.726 837.483L293.718 837.174C293.67 835.253 294.195 833.412 295.241 831.852C298.183 827.468 304.417 826.475 309.132 829.639C313.848 832.803 315.291 838.948 312.349 843.332C311.303 844.892 309.802 846.077 308.002 846.759L307.714 846.868L307.998 847.027C308.276 847.18 308.548 847.349 308.81 847.525C313.526 850.689 314.969 856.834 312.028 861.218C309.086 865.602 302.852 866.596 298.137 863.431C295.582 861.717 293.887 859.058 293.482 856.133L293.411 855.62L293.192 856.073C291.166 860.248 290.58 863.159 291.352 865.232L291.67 866.093L282.022 859.618L282.018 859.616Z"
              fill="black"
            />
            <path
              d="M182.863 621.392C187.103 618.24 193.027 612.092 197.931 601.285C197.969 601.2 197.958 601.096 197.902 601.023C190.76 591.545 183.836 586.814 179.012 584.66C173.338 582.128 167.095 584.618 164.998 590.593C164.452 592.151 164.477 593.237 164.618 594.512C164.618 594.512 164.663 594.824 164.793 595.329C165.374 597.574 166.677 599.552 168.44 601L168.69 601.205C169.057 601.506 168.862 602.114 168.395 602.12C165.867 602.155 162.063 602.101 159.458 600.384C158.66 599.858 157.635 600.474 157.742 601.445L158.645 609.633C158.752 610.601 159.884 610.976 160.546 610.289C162.738 608.018 166.498 607.144 168.973 606.623C169.359 606.542 169.625 607.017 169.365 607.323C168.015 608.903 167.11 610.85 166.818 612.941C166.654 614.106 166.667 614.913 166.667 614.913C166.808 616.189 167.02 617.255 167.892 618.656C171.242 624.032 177.878 625.1 182.863 621.392Z"
              fill="black"
            />
            <path
              d="M559.539 948.2C556.87 943.641 551.409 937.078 541.204 931.019C541.124 930.971 541.02 930.971 540.941 931.019C530.737 937.078 525.275 943.441 522.606 948C519.467 953.362 521.257 959.841 526.966 962.58C528.455 963.294 529.537 963.388 530.82 963.388C530.82 963.388 531.135 963.378 531.652 963.303C533.946 962.972 536.055 961.894 537.687 960.301L537.919 960.074C538.259 959.743 538.841 960.003 538.796 960.468C538.554 962.984 538.083 966.759 536.091 969.16C535.48 969.896 535.98 970.983 536.957 970.983L545.195 970.983C546.169 970.983 546.665 969.899 546.055 969.165C544.038 966.738 543.582 962.904 543.336 960.387C543.297 959.994 543.799 959.782 544.074 960.074C545.497 961.589 547.332 962.702 549.379 963.222C550.519 963.512 551.323 963.588 551.323 963.588C552.606 963.588 553.689 963.494 555.177 962.78C560.888 960.04 562.678 953.562 559.539 948.2Z"
              fill="black"
            />
            <path
              d="M430.291 916.258C430.76 914.765 430.873 913.24 430.621 911.682C430.297 909.659 429.434 907.871 428.004 906.348C427.34 905.642 426.588 905.038 425.734 904.569C422.611 902.862 419.473 902.823 416.346 904.321C414.741 905.091 413.473 906.245 412.486 907.688C412.186 908.124 411.942 908.594 411.683 909.039C411.7 908.988 411.712 908.912 411.739 908.836C412.177 907.653 412.378 906.427 412.337 905.16C412.245 902.436 411.244 900.067 409.231 898.118C408.215 897.138 407.021 896.423 405.677 895.954C403.796 895.296 401.903 895.215 400.002 895.696C398.115 896.168 396.511 897.112 395.18 898.485C394.146 899.556 393.396 900.795 392.884 902.188C392.023 904.546 391.839 906.99 392.067 909.488C392.22 911.207 392.568 912.893 393.009 914.57C393.517 916.502 394.15 918.396 394.84 920.275C395.749 922.744 396.685 925.205 397.582 927.678C398.368 929.849 399.063 932.044 399.463 934.311C399.604 935.109 399.668 935.922 399.765 936.729C399.77 936.775 399.776 936.821 399.78 936.881C399.813 936.861 399.841 936.844 399.864 936.825C401.322 935.577 402.963 934.591 404.665 933.698C406.386 932.794 408.168 932.008 409.954 931.233C412.331 930.207 414.717 929.195 417.075 928.132C419.423 927.069 421.692 925.863 423.79 924.376C425.343 923.281 426.754 922.038 427.938 920.553C428.506 919.84 429.011 919.085 429.43 918.274C429.524 918.088 429.629 917.911 429.728 917.726L430.118 916.806C430.17 916.626 430.22 916.449 430.276 916.271L430.291 916.258Z"
              fill="#EDCF89"
            />
            <path
              d="M912.917 408.472L926.746 386.914L902.674 378.156L888.85 399.717L912.917 408.472Z"
              fill="#EDCF89"
            />
            <path
              d="M659.341 938.742L679.703 954.279L690.39 931L670.026 915.468L659.341 938.742Z"
              fill="#EDCF89"
            />
            <path
              d="M821.32 254.959L820.405 254.89C818.203 254.721 815.566 256.086 812.106 259.18L811.731 259.516L812.244 259.443C815.167 259.027 818.191 259.925 820.542 261.908C824.882 265.571 825.643 271.837 822.238 275.872C818.833 279.907 812.529 280.211 808.189 276.549C807.947 276.345 807.712 276.127 807.486 275.905L807.256 275.675L807.23 275.983C807.067 277.898 806.344 279.67 805.132 281.105C801.727 285.141 795.423 285.444 791.083 281.782C786.743 278.12 785.981 271.854 789.386 267.819C790.597 266.383 792.219 265.37 794.083 264.889L794.381 264.812L794.116 264.624C793.857 264.441 793.605 264.243 793.364 264.04C789.024 260.377 788.262 254.111 791.667 250.076C795.072 246.041 801.377 245.737 805.717 249.399C808.068 251.383 809.461 254.212 809.543 257.164L809.558 257.682L809.825 257.256C812.296 253.328 813.199 250.499 812.659 248.354L812.436 247.463L821.317 254.956L821.32 254.959Z"
              fill="black"
            />
            <path
              d="M948.014 548.847C943.455 551.516 936.892 556.976 930.833 567.181C930.785 567.261 930.785 567.365 930.833 567.445C936.892 577.648 943.255 583.11 947.814 585.78C953.177 588.919 959.655 587.129 962.394 581.42C963.108 579.931 963.202 578.849 963.202 577.565C963.202 577.565 963.192 577.251 963.117 576.734C962.786 574.44 961.708 572.33 960.115 570.698L959.888 570.466C959.557 570.127 959.817 569.545 960.282 569.59C962.798 569.832 966.573 570.303 968.974 572.295C969.71 572.905 970.797 572.405 970.797 571.429L970.797 563.191C970.797 562.217 969.713 561.721 968.979 562.331C966.552 564.348 962.718 564.803 960.201 565.05C959.808 565.088 959.596 564.587 959.888 564.312C961.403 562.889 962.516 561.053 963.036 559.006C963.326 557.867 963.402 557.063 963.402 557.063C963.402 555.779 963.308 554.696 962.595 553.208C959.854 547.498 953.376 545.708 948.014 548.847Z"
              fill="black"
            />
            <path
              d="M814.461 879.523L814.682 878.632C815.216 876.49 814.311 873.661 811.838 869.734L811.57 869.307L811.556 869.825C811.478 872.777 810.088 875.608 807.739 877.594C803.403 881.261 797.098 880.965 793.688 876.934C790.279 872.902 791.033 866.635 795.369 862.968C795.61 862.764 795.865 862.569 796.121 862.383L796.386 862.194L796.087 862.118C794.226 861.637 792.6 860.628 791.387 859.194C787.978 855.162 788.732 848.895 793.068 845.228C797.404 841.561 803.709 841.858 807.118 845.889C808.331 847.323 809.059 849.092 809.222 851.01L809.248 851.317L809.478 851.087C809.702 850.862 809.939 850.646 810.18 850.443C814.516 846.775 820.821 847.072 824.23 851.103C827.64 855.135 826.885 861.401 822.549 865.069C820.201 867.055 817.178 867.956 814.254 867.543L813.741 867.471L814.117 867.806C817.577 870.899 820.215 872.261 822.42 872.087L823.336 872.017L814.464 879.52L814.461 879.523Z"
              fill="black"
            />
            <path
              d="M912.739 714.607C911.272 714.06 909.756 713.868 908.187 714.038C906.15 714.256 904.318 715.024 902.723 716.372C901.983 716.998 901.34 717.717 900.828 718.546C898.96 721.576 898.756 724.707 900.089 727.908C900.774 729.551 901.86 730.878 903.249 731.939C903.669 732.261 904.126 732.53 904.556 732.812C904.506 732.792 904.43 732.776 904.357 732.745C903.198 732.246 901.984 731.981 900.717 731.956C897.991 731.905 895.574 732.781 893.522 734.689C892.489 735.652 891.714 736.807 891.175 738.124C890.419 739.969 890.24 741.855 890.62 743.778C890.992 745.687 891.851 747.338 893.153 748.74C894.168 749.828 895.366 750.642 896.731 751.226C899.041 752.21 901.472 752.521 903.978 752.425C905.703 752.361 907.404 752.102 909.102 751.75C911.058 751.344 912.983 750.81 914.895 750.22C917.408 749.442 919.915 748.635 922.432 747.869C924.641 747.198 926.869 746.618 929.154 746.337C929.958 746.239 930.773 746.217 931.585 746.163C931.631 746.16 931.677 746.157 931.737 746.155C931.719 746.121 931.703 746.093 931.685 746.069C930.516 744.548 929.617 742.857 928.815 741.111C928.002 739.345 927.309 737.524 926.629 735.7C925.729 733.272 924.843 730.836 923.905 728.426C922.967 726.026 921.881 723.697 920.506 721.524C919.493 719.915 918.326 718.441 916.906 717.181C916.223 716.577 915.495 716.033 914.708 715.572C914.526 715.469 914.355 715.354 914.175 715.246L913.278 714.809C913.1 714.747 912.927 714.688 912.751 714.623L912.739 714.607Z"
              fill="#EDCF89"
            />
            <path
              d="M647.362 198.041C647.079 199.58 647.152 201.107 647.592 202.623C648.161 204.591 649.235 206.261 650.84 207.599C651.585 208.219 652.405 208.726 653.31 209.087C656.618 210.401 659.737 210.058 662.658 208.19C664.157 207.229 665.275 205.93 666.079 204.378C666.323 203.908 666.509 203.411 666.711 202.938C666.701 202.991 666.698 203.068 666.68 203.146C666.39 204.375 666.34 205.616 666.535 206.868C666.958 209.561 668.241 211.79 670.476 213.479C671.604 214.329 672.876 214.892 674.267 215.194C676.215 215.618 678.103 215.467 679.931 214.759C681.747 214.06 683.223 212.928 684.378 211.402C685.273 210.214 685.867 208.893 686.205 207.448C686.772 205.002 686.657 202.554 686.127 200.102C685.765 198.415 685.214 196.784 684.572 195.173C683.833 193.317 682.973 191.515 682.06 189.733C680.857 187.394 679.627 185.065 678.436 182.72C677.391 180.661 676.433 178.567 675.76 176.365C675.523 175.591 675.36 174.792 675.166 174.002C675.155 173.957 675.144 173.912 675.132 173.854C675.102 173.877 675.077 173.898 675.056 173.92C673.761 175.335 672.252 176.514 670.672 177.608C669.074 178.715 667.401 179.713 665.723 180.7C663.488 182.007 661.243 183.303 659.033 184.645C656.832 185.986 654.727 187.46 652.825 189.191C651.417 190.468 650.168 191.874 649.174 193.491C648.697 194.268 648.288 195.079 647.971 195.935C647.9 196.132 647.818 196.32 647.742 196.516L647.467 197.476C647.438 197.661 647.41 197.842 647.376 198.027L647.362 198.041Z"
              fill="#EDCF89"
            />
            <path
              d="M381.986 223.607L358.091 214.384L354.341 239.723L378.237 248.941L381.986 223.607Z"
              fill="#EDCF89"
            />
            <path
              d="M247.146 310.518L247.081 311.433C246.92 313.636 248.296 316.268 251.404 319.715L251.741 320.089L251.666 319.576C251.239 316.654 252.124 313.628 254.099 311.269C257.744 306.914 264.007 306.128 268.055 309.517C272.104 312.906 272.432 319.21 268.787 323.564C268.584 323.806 268.367 324.042 268.147 324.269L267.918 324.5L268.225 324.525C270.141 324.681 271.916 325.397 273.356 326.602C277.405 329.991 277.733 336.295 274.088 340.649C270.443 345.004 264.18 345.79 260.132 342.401C258.691 341.195 257.672 339.577 257.183 337.716L257.106 337.417L256.918 337.683C256.736 337.943 256.54 338.196 256.337 338.438C252.692 342.793 246.429 343.578 242.38 340.19C238.332 336.801 238.003 330.497 241.648 326.143C243.623 323.784 246.446 322.38 249.398 322.286L249.916 322.269L249.488 322.003C245.551 319.548 242.718 318.657 240.575 319.205L239.685 319.431L247.144 310.521L247.146 310.518Z"
              fill="black"
            />
            <path
              d="M498.464 191.06C501.993 194.992 508.659 200.325 519.873 204.214C519.96 204.245 520.063 204.224 520.131 204.161C528.911 196.178 532.986 188.848 534.686 183.846C536.685 177.963 533.632 171.976 527.489 170.438C525.888 170.037 524.809 170.162 523.551 170.419C523.551 170.419 523.246 170.493 522.754 170.669C520.573 171.454 518.723 172.933 517.443 174.822L517.261 175.09C516.996 175.483 516.373 175.345 516.324 174.88C516.056 172.367 515.76 168.574 517.23 165.822C517.681 164.979 516.973 164.014 516.016 164.21L507.945 165.863C506.991 166.058 506.723 167.22 507.467 167.816C509.93 169.79 511.146 173.454 511.892 175.87C512.009 176.248 511.56 176.556 511.232 176.325C509.535 175.126 507.513 174.404 505.403 174.305C504.229 174.25 503.426 174.337 503.426 174.337C502.168 174.594 501.126 174.903 499.812 175.901C494.767 179.731 494.313 186.437 498.464 191.06Z"
              fill="black"
            />
            <defs>
              <filter
                id="filter0_d_2_4"
                x="16.0343"
                y="19.7457"
                width="1091.78"
                height="1091.78"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="60.6142" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.894118 0 0 0 0 0.745098 0 0 0 0 0.356863 0 0 0 0.3 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_2_4"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_2_4"
                  result="shape"
                />
              </filter>
              <filter
                id="filter1_d_2_4"
                x="134.954"
                y="140.975"
                width="853.936"
                height="853.937"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="2.30841" />
                <feGaussianBlur stdDeviation="1.15421" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_2_4"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_2_4"
                  result="shape"
                />
              </filter>
              <linearGradient
                id="paint0_linear_2_4"
                x1="1295.87"
                y1="1182.88"
                x2="483.014"
                y2="488.395"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#272017" />
                <stop offset="1" stop-color="#07050A" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_2_4"
                x1="1102.89"
                y1="-14.4709"
                x2="494.52"
                y2="627.066"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#272017" />
                <stop offset="1" stop-color="#07050A" />
              </linearGradient>
            </defs>
          </svg>
        )}
      </>
    );
  }
);

HamPokerChip.displayName = "HamPokerChip";

export default HamPokerChip;
