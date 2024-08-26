import React from "react";
import styles from "./social.module.scss";

const Social = () => {
  return (
    <div className={styles.wrapper}>
      <a href="https://www.instagram.com/bitsoasis">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
        >
          <path
            d="M10.5451 0.126132C8.62989 0.216492 7.32201 0.522132 6.17865 0.971412C4.99533 1.43257 3.99237 2.05141 2.99445 3.05293C1.99653 4.05445 1.38201 5.05813 0.924088 6.24325C0.480928 7.38913 0.180688 8.69809 0.0960882 10.6144C0.0114882 12.5307 -0.00723185 13.1466 0.00212815 18.0347C0.0114882 22.9228 0.0330882 23.5355 0.125968 25.4557C0.217408 27.3706 0.521968 28.6781 0.971248 29.8218C1.43313 31.0051 2.05125 32.0077 3.05313 33.006C4.05501 34.0043 5.05797 34.6174 6.24597 35.076C7.39077 35.5185 8.70009 35.8201 10.616 35.904C12.5319 35.9879 13.1486 36.0073 18.0352 35.998C22.9219 35.9886 23.5371 35.967 25.457 35.8759C27.3769 35.7849 28.6776 35.4781 29.8216 35.031C31.005 34.5681 32.0083 33.951 33.0058 32.9488C34.0034 31.9465 34.6176 30.9421 35.0751 29.7563C35.5186 28.6115 35.82 27.3022 35.9031 25.3877C35.987 23.4664 36.0068 22.8529 35.9974 17.9656C35.9881 13.0782 35.9661 12.4655 35.875 10.546C35.784 8.62645 35.479 7.32289 35.0301 6.17845C34.5675 4.99513 33.9501 3.99325 32.9486 2.99425C31.9471 1.99525 30.942 1.38145 29.7565 0.924972C28.611 0.481812 27.3024 0.179772 25.3864 0.0969718C23.4705 0.0141718 22.8538 -0.00706816 17.9654 0.00229184C13.077 0.0116518 12.465 0.0325318 10.5451 0.126132ZM10.7553 32.6658C9.00033 32.5895 8.04741 32.2979 7.41237 32.0538C6.57141 31.7298 5.97237 31.3381 5.33949 30.7114C4.70661 30.0846 4.31781 29.4834 3.98949 28.6443C3.74289 28.0092 3.44589 27.0574 3.36381 25.3024C3.27453 23.4055 3.25581 22.836 3.24537 18.0304C3.23493 13.2247 3.25329 12.6559 3.33645 10.7584C3.41133 9.00481 3.70473 8.05081 3.94845 7.41613C4.27245 6.57409 4.66269 5.97613 5.29089 5.34361C5.91909 4.71109 6.51849 4.32157 7.35837 3.99325C7.99269 3.74557 8.94453 3.45109 10.6988 3.36757C12.5971 3.27757 13.1659 3.25957 17.9708 3.24913C22.7757 3.23869 23.346 3.25669 25.245 3.34021C26.9985 3.41653 27.9529 3.70705 28.5868 3.95221C29.4282 4.27621 30.0268 4.66537 30.6594 5.29465C31.2919 5.92393 31.6818 6.52117 32.0101 7.36285C32.2581 7.99537 32.5526 8.94685 32.6354 10.7022C32.7258 12.6005 32.7463 13.1697 32.7549 17.9742C32.7636 22.7788 32.7466 23.3494 32.6635 25.2462C32.5868 27.0012 32.2959 27.9545 32.0515 28.5903C31.7275 29.4309 31.3369 30.0303 30.7083 30.6624C30.0798 31.2946 29.4811 31.6841 28.6408 32.0124C28.0072 32.2597 27.0543 32.5549 25.3015 32.6385C23.4032 32.7277 22.8344 32.7464 18.0277 32.7569C13.221 32.7673 12.654 32.7479 10.7557 32.6658M25.4293 8.37985C25.43 8.80709 25.5574 9.22452 25.7954 9.57935C26.0333 9.93418 26.3712 10.2105 26.7662 10.3733C27.1612 10.5361 27.5956 10.5781 28.0145 10.494C28.4334 10.4099 28.8179 10.2035 29.1194 9.90079C29.421 9.59814 29.626 9.21285 29.7086 8.79367C29.7911 8.37449 29.7475 7.94023 29.5833 7.54583C29.419 7.15143 29.1415 6.81459 28.7858 6.57793C28.4301 6.34126 28.0122 6.2154 27.585 6.21625C27.0122 6.2174 26.4634 6.44597 26.0591 6.8517C25.6549 7.25743 25.4283 7.80711 25.4293 8.37985ZM8.75769 18.0181C8.76777 23.1229 12.9135 27.2518 18.0172 27.2421C23.121 27.2323 27.2527 23.0869 27.243 17.9821C27.2332 12.8773 23.0864 8.74741 17.982 8.75749C12.8775 8.76757 8.74797 12.9141 8.75769 18.0181ZM11.9998 18.0117C11.9975 16.8249 12.3471 15.6642 13.0045 14.6762C13.6618 13.6882 14.5974 12.9173 15.6928 12.4609C16.7883 12.0046 17.9945 11.8834 19.1589 12.1126C20.3232 12.3419 21.3935 12.9112 22.2343 13.7487C23.0751 14.5861 23.6486 15.6541 23.8825 16.8176C24.1163 17.981 23.9998 19.1877 23.5479 20.2849C23.0959 21.3822 22.3287 22.3208 21.3433 22.9821C20.3579 23.6433 19.1986 23.9975 18.0118 23.9999C17.2239 24.0015 16.4433 23.848 15.7147 23.5479C14.9861 23.2478 14.3237 22.8072 13.7654 22.2511C13.2071 21.695 12.7639 21.0344 12.4609 20.307C12.158 19.5796 12.0013 18.7996 11.9998 18.0117Z"
            fill="url(#paint0_linear_2986_4733)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_2986_4733"
              x1="17.9998"
              y1="-6.69741"
              x2="17.9997"
              y2="40.8751"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#876D24" />
              <stop offset="0.28" stop-color="#F3D57B" />
              <stop offset="0.66" stop-color="#B69637" />
              <stop offset="1" stop-color="#DCBF69" />
            </linearGradient>
          </defs>
        </svg>
      </a>
      <a href="https://www.linkedin.com/company/oasis24-bits-pilani/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
        >
          <path
            d="M42.5463 42.1274H35.1475V30.6546C35.1475 27.9188 35.0982 24.397 31.2993 24.397C27.4457 24.397 26.8561 27.3778 26.8561 30.4554V42.1266H19.4573V18.5339H26.5602V21.7581H26.6596C27.3704 20.5547 28.3976 19.5647 29.6317 18.8936C30.8658 18.2225 32.2607 17.8954 33.6677 17.9471C41.1667 17.9471 42.5494 22.8311 42.5494 29.1848L42.5463 42.1274ZM11.1089 15.309C10.2597 15.3091 9.42952 15.0599 8.72335 14.5929C8.01718 14.1259 7.46678 13.462 7.14166 12.6853C6.81654 11.9085 6.73134 11.0537 6.89686 10.229C7.06238 9.40427 7.47119 8.64668 8.07156 8.05201C8.67193 7.45734 9.43691 7.0523 10.2698 6.88811C11.1026 6.72393 11.9659 6.80796 12.7505 7.1296C13.5352 7.45123 14.2058 7.99602 14.6778 8.69507C15.1497 9.39412 15.4016 10.216 15.4018 11.0569C15.4019 11.6152 15.2909 12.168 15.0752 12.6838C14.8596 13.1997 14.5434 13.6684 14.1448 14.0632C13.7462 14.4581 13.2728 14.7713 12.752 14.9851C12.2311 15.1988 11.6728 15.3089 11.1089 15.309ZM14.8083 42.1274H7.4018V18.5339H14.8083V42.1274Z"
            fill="url(#paint0_linear_2986_4728)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_2986_4728"
              x1="24.682"
              y1="0.234905"
              x2="24.6819"
              y2="46.9105"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#876D24" />
              <stop offset="0.28" stop-color="#F3D57B" />
              <stop offset="0.66" stop-color="#B69637" />
              <stop offset="1" stop-color="#DCBF69" />
            </linearGradient>
          </defs>
        </svg>
      </a>
      <a href="https://twitter.com/bitsoasis">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="36"
          viewBox="0 0 40 36"
          fill="none"
        >
          <g clip-path="url(#clip0_2986_4725)">
            <path
              d="M31.4859 0H37.5904L24.257 15.28L40 36H27.6305L17.992 23.44L6.90763 36H0.803213L15.1004 19.68L0 0H12.6908L21.4458 11.52L31.4859 0ZM29.3173 32.32H32.6908L10.8434 3.44H7.14859L29.3173 32.32Z"
              fill="url(#paint0_linear_2986_4725)"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_2986_4725"
              x1="20"
              y1="-6.69767"
              x2="19.9999"
              y2="40.875"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#876D24" />
              <stop offset="0.28" stop-color="#F3D57B" />
              <stop offset="0.66" stop-color="#B69637" />
              <stop offset="1" stop-color="#DCBF69" />
            </linearGradient>
            <clipPath id="clip0_2986_4725">
              <rect width="40" height="36" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </a>
    </div>
  );
};

export default Social;