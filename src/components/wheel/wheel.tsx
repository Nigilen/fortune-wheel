import { FC, useRef } from 'react';
import styles from './wheel.module.scss';
import cn from 'classnames';

interface WheelItem {
  id: number;
  value: string;
};

interface WheelProps {
  data: WheelItem[];
  selectedItem: WheelItem | null;
};

export const Wheel: FC<WheelProps> = ({ data, selectedItem }) => {

  const carouselRef = useRef<HTMLDivElement>(null);

  const rotate = (sector: number) => {
    return `rotate(${3600 + (-45 * sector)}deg)`;
  };

  if (carouselRef.current) {
    carouselRef.current.style.transform = rotate(selectedItem ? selectedItem.id : 0);
  };

  return (
    <div className={styles.wheel}>
      <svg className={styles.wheel__arrow} width="175" height="211" viewBox="0 0 175 211" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_1_158)">
        <path d="M122.062 87.7627C122.062 68.7911 106.679 53.4308 87.7305 53.4308C68.7823 53.4308 53.3986 68.8145 53.3986 87.7627C53.3986 106.711 87.7305 157.107 87.7305 157.107C87.7305 157.107 122.062 106.711 122.062 87.7627Z" fill="url(#paint0_linear_1_158)"/>
        <path d="M87.7071 52.2347C68.1257 52.2347 52.2026 68.1578 52.2026 87.7392C52.2026 107.321 85.3386 155.676 86.7456 157.763L87.7071 159.194L88.6686 157.763C90.0756 155.7 123.212 106.852 123.212 87.7392C123.212 68.6268 107.289 52.2347 87.7071 52.2347ZM87.7071 154.996C82.1493 146.648 54.5477 104.366 54.5477 87.7392C54.5477 69.4476 69.439 54.5798 87.7071 54.5798C105.975 54.5798 120.866 69.4711 120.866 87.7392C120.866 104.366 93.2649 146.624 87.7071 154.996Z" fill="url(#paint1_linear_1_158)"/>
        </g>
        <path d="M118.076 87.7627C118.076 70.9954 104.474 57.4174 87.7306 57.4174C70.9867 57.4174 57.3853 71.0189 57.3853 87.7627C57.3853 104.507 70.9867 118.108 87.7306 118.108C104.474 118.108 118.076 104.507 118.076 87.7627Z" fill="url(#paint2_linear_1_158)"/>
        <path d="M113.925 87.7628C113.925 73.2936 102.2 61.5683 87.7308 61.5683C73.2616 61.5683 61.5363 73.2936 61.5363 87.7628C61.5363 102.232 73.2616 113.957 87.7308 113.957C102.2 113.957 113.925 102.232 113.925 87.7628Z" fill="#1C1D6E"/>
        <defs>
        <filter id="filter0_d_1_158" x="0.774063" y="0.806168" width="173.866" height="209.816" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset/>
        <feGaussianBlur stdDeviation="25.7143"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.0555556 0 0 0 0 0.0666667 0 0 0 0 0.333333 0 0 0 0.5 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_158"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_158" result="shape"/>
        </filter>
        <linearGradient id="paint0_linear_1_158" x1="72.8063" y1="150.708" x2="115.288" y2="71.2037" gradientUnits="userSpaceOnUse">
        <stop stopColor="#5977C4"/>
        <stop offset="1" stopColor="#54268D"/>
        </linearGradient>
        <linearGradient id="paint1_linear_1_158" x1="61.8736" y1="128.675" x2="117.307" y2="73.7141" gradientUnits="userSpaceOnUse">
        <stop stopColor="#789CD2"/>
        <stop offset="0.48" stopColor="#403EA6"/>
        <stop offset="1" stopColor="#3E1E72"/>
        </linearGradient>
        <linearGradient id="paint2_linear_1_158" x1="65.651" y1="100.791" x2="94.7353" y2="57.3555" gradientUnits="userSpaceOnUse">
        <stop stopColor="#789CD2"/>
        <stop offset="0.48" stopColor="#403EA6"/>
        <stop offset="1" stopColor="#3E1E72"/>
        </linearGradient>
        </defs>
      </svg>
      <svg className={styles.wheel__circle} width="566" height="566" viewBox="0 0 566 566" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M565.183 282.591C565.183 438.662 438.662 565.183 282.591 565.183C126.52 565.183 0 438.662 0 282.591C0 126.52 126.52 0 282.591 0C438.662 0 565.183 126.52 565.183 282.591ZM282.617 518.261C412.628 518.261 518.022 412.867 518.022 282.857C518.022 152.847 412.628 47.453 282.617 47.453C152.607 47.453 47.2133 152.847 47.2133 282.857C47.2133 412.867 152.607 518.261 282.617 518.261Z" fill="url(#paint0_linear_1_153)"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M540.233 282.677C540.233 425.435 424.505 541.163 281.747 541.163C138.989 541.163 23.2614 425.435 23.2614 282.677C23.2614 139.92 138.989 24.1917 281.747 24.1917C424.505 24.1917 540.233 139.92 540.233 282.677ZM282.704 518.347C412.714 518.347 518.108 412.953 518.108 282.943C518.108 152.933 412.714 47.5391 282.704 47.5391C152.694 47.5391 47.2995 152.933 47.2995 282.943C47.2995 412.953 152.694 518.347 282.704 518.347Z" fill="url(#paint1_linear_1_153)" fillOpacity="0.8"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M522.883 283.307C522.883 416.135 415.205 523.814 282.377 523.814C149.549 523.814 41.8704 416.135 41.8704 283.307C41.8704 150.479 149.549 42.8008 282.377 42.8008C415.205 42.8008 522.883 150.479 522.883 283.307ZM282.402 518.562C412.307 518.562 517.657 413.238 517.657 283.307C517.657 153.352 412.357 48.0269 282.402 48.0269C152.446 48.0269 47.1216 153.377 47.1216 283.307C47.1216 413.238 152.496 518.562 282.402 518.562Z" fill="url(#paint2_linear_1_153)"/>
        <defs>
        <linearGradient id="paint0_linear_1_153" x1="76.9745" y1="161.264" x2="347.824" y2="565.759" gradientUnits="userSpaceOnUse">
        <stop stopColor="#789CD2"/>
        <stop offset="0.48" stopColor="#403EA6"/>
        <stop offset="1" stopColor="#3E1E72"/>
        </linearGradient>
        <linearGradient id="paint1_linear_1_153" x1="169.383" y1="56.0978" x2="329.662" y2="509.009" gradientUnits="userSpaceOnUse">
        <stop stopColor="#5977C4"/>
        <stop offset="1" stopColor="#54268D"/>
        </linearGradient>
        <linearGradient id="paint2_linear_1_153" x1="107.381" y1="180.049" x2="337.894" y2="524.304" gradientUnits="userSpaceOnUse">
        <stop stopColor="#789CD2"/>
        <stop offset="0.48" stopColor="#403EA6"/>
        <stop offset="1" stopColor="#3E1E72"/>
        </linearGradient>
        </defs>
      </svg>
      <div className={styles.wheel__carousel} ref={carouselRef}>
        {
          data.map(item => (
            <div key={item.id} className={cn(styles.wheel__item, "text-stroke")}>
              {item.value}
            </div>
          ))
        }
      </div>
      <svg className={styles.wheel__center} width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="79.0002" cy="79.1429" r="61.0286" fill="url(#paint0_linear_1_146)"/>
        <g filter="url(#filter0_d_1_146)">
        <mask id="path-2-inside-1_1_146" fill="white">
        <path fillRule="evenodd" clipRule="evenodd" d="M78.9999 155.429C36.8685 155.429 2.71422 121.274 2.71422 79.143C2.71422 37.0115 36.8685 2.85724 78.9999 2.85724C121.131 2.85724 155.286 37.0115 155.286 79.143C155.286 121.274 121.131 155.429 78.9999 155.429ZM79 140.172C45.2948 140.172 17.9714 112.848 17.9714 79.143C17.9714 45.4378 45.2948 18.1144 79 18.1144C112.705 18.1144 140.029 45.4378 140.029 79.143C140.029 112.848 112.705 140.172 79 140.172Z"/>
        </mask>
        <path fillRule="evenodd" clipRule="evenodd" d="M78.9999 155.429C36.8685 155.429 2.71422 121.274 2.71422 79.143C2.71422 37.0115 36.8685 2.85724 78.9999 2.85724C121.131 2.85724 155.286 37.0115 155.286 79.143C155.286 121.274 121.131 155.429 78.9999 155.429ZM79 140.172C45.2948 140.172 17.9714 112.848 17.9714 79.143C17.9714 45.4378 45.2948 18.1144 79 18.1144C112.705 18.1144 140.029 45.4378 140.029 79.143C140.029 112.848 112.705 140.172 79 140.172Z" fill="url(#paint1_linear_1_146)"/>
        <path d="M3.80402 79.143C3.80402 120.673 37.4704 154.339 78.9999 154.339V156.518C36.2666 156.518 1.62442 121.876 1.62442 79.143H3.80402ZM78.9999 3.94703C37.4704 3.94703 3.80402 37.6134 3.80402 79.143H1.62442C1.62442 36.4096 36.2666 1.76744 78.9999 1.76744V3.94703ZM154.196 79.143C154.196 37.6134 120.529 3.94703 78.9999 3.94703V1.76744C121.733 1.76744 156.375 36.4096 156.375 79.143H154.196ZM78.9999 154.339C120.529 154.339 154.196 120.673 154.196 79.143H156.375C156.375 121.876 121.733 156.518 78.9999 156.518V154.339ZM19.0612 79.143C19.0612 112.246 45.8967 139.082 79 139.082V141.261C44.693 141.261 16.8816 113.45 16.8816 79.143H19.0612ZM79 19.2042C45.8967 19.2042 19.0612 46.0397 19.0612 79.143H16.8816C16.8816 44.8359 44.693 17.0246 79 17.0246V19.2042ZM138.939 79.143C138.939 46.0397 112.103 19.2042 79 19.2042V17.0246C113.307 17.0246 141.118 44.8359 141.118 79.143H138.939ZM79 139.082C112.103 139.082 138.939 112.246 138.939 79.143H141.118C141.118 113.45 113.307 141.261 79 141.261V139.082Z" fill="url(#paint2_linear_1_146)" fillOpacity="0.5" mask="url(#path-2-inside-1_1_146)"/>
        </g>
        <g filter="url(#filter1_d_1_146)">
        <circle cx="79.0005" cy="79.1429" r="27.4286" fill="#6276C0"/>
        </g>
        <defs>
        <filter id="filter0_d_1_146" x="0.534642" y="0.677647" width="159.11" height="159.11" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="1.0898" dy="1.0898"/>
        <feGaussianBlur stdDeviation="1.63469"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.12549 0 0 0 0 0.0431373 0 0 0 0 0.00784314 0 0 0 0.75 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_146"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_146" result="shape"/>
        </filter>
        <filter id="filter1_d_1_146" x="48.1433" y="51.7143" width="61.7142" height="61.7143" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="3.42857"/>
        <feGaussianBlur stdDeviation="1.71429"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_146"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_146" result="shape"/>
        </filter>
        <linearGradient id="paint0_linear_1_146" x1="40.8574" y1="31.1919" x2="112.784" y2="129.818" gradientUnits="userSpaceOnUse">
        <stop stopColor="#344692"/>
        <stop offset="1" stopColor="#391372"/>
        </linearGradient>
        <linearGradient id="paint1_linear_1_146" x1="158.337" y1="30.8286" x2="-34.8826" y2="49.3178" gradientUnits="userSpaceOnUse">
        <stop stopColor="#490082"/>
        <stop offset="0.32" stopColor="#5168B2"/>
        <stop offset="0.6" stopColor="#799CD2"/>
        <stop offset="0.855" stopColor="#595FB3"/>
        </linearGradient>
        <linearGradient id="paint2_linear_1_146" x1="95.2585" y1="-17.1805" x2="12.1167" y2="103.486" gradientUnits="userSpaceOnUse">
        <stop stopColor="#6C8BC5"/>
        <stop offset="1" stopColor="#789CD2"/>
        </linearGradient>
        </defs>
      </svg>
    </div>
  );
};