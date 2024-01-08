'use client'

import Image from 'next/image'
import React from 'react'
import Slide from './slideShow'
import ButtonType2 from '@/app/common/Button/btn2'
import Love from '@/app/ui/LoveCus'
import Link from 'next/link'
import './styles.css'

export const data2 = [
  {
    img: '/image2.png',
    name: 'MO231 - Pomeranian White',
    sex: 'Male',
    age: '02 months',
    price: '6.900.000 VND',
  },
  {
    img: '/image3.png',
    name: 'MO502 - Poodle Tiny Yellow',
    sex: 'Male',
    age: '02 months',
    price: '6.900.000 VND',
  },
  {
    img: '/image4.png',
    name: 'MO102 - Poodle Tiny Sepia',
    sex: 'Male',
    age: '02 months',
    price: '6.900.000 VND',
  },
  {
    img: '/image5.png',
    name: 'MO512 - Alaskan Malamute Grey',
    sex: 'Male',
    age: '02 months',
    price: '6.900.000 VND',
  },
]
const data = [
  {
    title: 'SKU',
    name: ': #1000078',
  },
  {
    title: 'Gender',
    name: ': Female',
  },
  {
    title: 'Age',
    name: ': 2 Months',
  },
  {
    title: 'Color',
    name: 'Appricot & Tan',
  },
  {
    title: 'Color',
    name: ': Small',
  },
  {
    title: 'Vaccinated',
    name: ': Appricot & Tan',
  },
  {
    title: 'Dewormed',
    name: ': Yes',
  },
  {
    title: 'Cert',
    name: ': Yes',
  },
  {
    title: 'Microchip',
    name: ': Yes (MKA)',
  },
  {
    title: 'Location',
    name: ': Vienam',
  },
  {
    title: 'Published Date',
    name: ': 12-Oct-2022',
  },
]
const DogInfo = () => {
  return (
    <>
      <div className='flex justify-center p-6'>
        <div className='w-[1280px] border border-[#EBEEEF] rounded-2xl h-auto p-5'>
          <div className='flex gap-12'>
            <div className='w-[590px] h-auto bg-transparent rounded-2xl'>
              <div className='flex flex-col'>
                <Slide />
                <div
                  className='w-auto rounded-xl bg-[#FCEED5] mt-5 flex justify-between'
                  style={{ padding: '9px 12px' }}>
                  <div className='flex gap-2 items-center'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'>
                      <g clip-path='url(#clip0_108_1539)'>
                        <path
                          d='M24 8.94622C24.0004 9.35265 23.9783 9.75879 23.9338 10.1628C23.4 15.2111 19.531 20.52 12 22.9655C4.48139 20.5324 0.600009 15.24 0.0662161 10.1628C0.0215847 9.7588 -0.000518473 9.35265 9.2288e-06 8.94622C9.2288e-06 4.93243 2.44966 1.44829 6.00001 1.44829C7.15631 1.44605 8.29902 1.69747 9.3476 2.18484L15.2979 1.92002C16.1641 1.60597 17.0787 1.44631 18 1.44829C21.5504 1.44829 24 4.93243 24 8.94622Z'
                          fill='#DF4D60'
                        />
                        <path
                          d='M24 8.94622C24.0004 9.35265 23.9783 9.75879 23.9338 10.1628C22.4524 13.9697 17.669 16.7586 12 16.7586C6.33104 16.7586 1.5476 13.9697 0.0662161 10.1628C0.0215847 9.7588 -0.000518473 9.35265 9.2288e-06 8.94622C9.2288e-06 4.93243 2.44966 1.44829 6.00001 1.44829C7.15631 1.44605 8.29902 1.69747 9.3476 2.18484L15.2979 1.92002C16.1641 1.60597 17.0787 1.44631 18 1.44829C21.5504 1.44829 24 4.93243 24 8.94622Z'
                          fill='#FF5364'
                        />
                        <path
                          d='M21.2069 16.7835C19.4725 18.9915 17.2312 20.7487 14.6731 21.9062C14.4248 22.0262 14.1724 22.1421 13.9158 22.2455C13.3075 22.5103 12.6662 22.7503 12 22.9655C11.7186 22.8745 11.4413 22.7793 11.1724 22.68V18.4138C10.1374 17.2807 9.54917 15.8102 9.5172 14.2759C9.53983 12.8139 9.91456 11.3788 10.6096 10.0924C10.6565 9.9908 10.659 9.87429 10.6166 9.77073C10.5743 9.66717 10.4908 9.58585 10.3862 9.54621C9.18232 9.12991 7.9192 8.91054 6.64548 8.89655C4.66341 8.23448 4.52686 6.25242 4.55582 5.48276C4.56163 5.29954 4.68833 5.14242 4.86617 5.09793L7.26617 4.50207C7.66603 4.40062 8.01402 4.15437 8.24272 3.81104L9.21513 2.35448C9.25565 2.2952 9.29988 2.23853 9.34755 2.18483C9.55296 1.94619 9.82319 1.77227 10.1255 1.68414C11.2787 1.32089 12.4728 1.10266 13.68 1.03448C14.3254 1.06984 14.9202 1.39538 15.2979 1.92C16.1596 3.1032 16.6088 4.53665 16.5765 6C16.5765 7.05931 16.1213 7.66759 15.4965 7.9531V7.96138L15.6165 8.79311L15.7075 9.43035C15.73 9.59428 15.8494 9.72835 16.0096 9.76966C16.705 10.0065 17.3277 10.4184 17.8179 10.9655C18.5834 11.7269 20.1269 14.2138 21.2069 16.7835Z'
                          fill='#35495E'
                        />
                        <path
                          d='M15.6166 8.79309C15.2892 8.91908 14.9411 8.98225 14.5903 8.9793C14.1383 8.97629 13.6907 8.8893 13.2703 8.72275C12.7996 8.53221 12.4906 8.07611 12.4883 7.56827V4.75861C12.4883 4.53008 12.6735 4.34482 12.9021 4.34482C13.1306 4.34482 13.3159 4.53008 13.3159 4.75861V7.56827C13.3157 7.73784 13.419 7.89035 13.5766 7.95309C14.1554 8.20232 14.8087 8.21569 15.3972 7.99033C15.4289 7.97635 15.4623 7.96661 15.4966 7.96137L15.6166 8.79309Z'
                          fill='#2C3E50'
                        />
                        <path
                          d='M18.6001 17.7186C18.5254 17.9343 18.2915 18.0504 18.0745 17.9793C17.2965 17.6753 16.4181 17.7793 15.7325 18.2565C14.9249 18.8918 14.4623 19.8693 14.4828 20.8965C14.4764 21.2426 14.5412 21.5863 14.6732 21.9062C14.4249 22.0262 14.1725 22.1421 13.9159 22.2455C13.7387 21.8181 13.65 21.3592 13.6552 20.8965C13.6361 19.604 14.2263 18.3777 15.2483 17.5862C16.1511 16.9542 17.3072 16.8072 18.3394 17.1931C18.5551 17.2678 18.6711 17.5017 18.6001 17.7186Z'
                          fill='#2C3E50'
                        />
                        <path
                          d='M6.20684 4.76691V6.00001C6.20684 6.22854 6.02158 6.4138 5.79305 6.4138H4.61374C4.56348 6.10616 4.54408 5.79427 4.55581 5.48277C4.56161 5.29954 4.68831 5.14243 4.86615 5.09794L6.20684 4.76691Z'
                          fill='#3F5C6C'
                        />
                      </g>
                      <defs>
                        <clipPath id='clip0_108_1539'>
                          <rect width='24' height='24' fill='white' />
                        </clipPath>
                      </defs>
                    </svg>
                    <span className='text-sm font-bold text-[#002A48] cursor-pointer'>
                      100% health guarantee for pets
                    </span>
                  </div>
                  <div className='flex gap-2'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='27'
                      height='27'
                      viewBox='0 0 27 27'
                      fill='none'>
                      <g clip-path='url(#clip0_108_1552)'>
                        <path
                          d='M11.2387 6.23168L13.6665 5.87498C14.6106 5.73629 15.3322 4.96141 15.4034 4.00988L15.6653 0.511214C15.6934 0.13585 15.2945 -0.121441 14.9641 0.0589108L12.746 1.26985C11.9879 1.68371 11.4553 2.41556 11.2947 3.26416L10.8163 5.79135C10.7684 6.04437 10.984 6.26912 11.2387 6.23168Z'
                          fill='#FFE07D'
                        />
                        <path
                          d='M14.9642 0.058912L13.9089 0.634982L13.6597 3.96532C13.5884 4.91686 12.8668 5.69168 11.9228 5.83043L10.8333 5.99053C10.8919 6.14878 11.0549 6.25868 11.2388 6.23163L13.6666 5.87488C14.6107 5.73619 15.3323 4.96131 15.4035 4.00977L15.6654 0.511109C15.6934 0.135851 15.2946 -0.12144 14.9642 0.058912Z'
                          fill='#FFD064'
                        />
                        <path
                          d='M6.86684 15.9549L8.46527 15.6186C8.81484 15.6588 9.04297 16.0055 8.94156 16.3424L8.51278 17.7674L12.5037 23.3514H15.1574L25.1904 21.3855L19.5049 9.97888C18.6578 8.27941 17.6577 6.66062 16.5169 5.14261C14.778 2.53421 11.2567 1.82403 8.64267 3.55451L6.94921 4.67559C6.24636 5.14087 5.78673 5.89455 5.69476 6.73244L5.54252 8.11994C5.48815 8.61575 5.14801 9.03356 4.67356 9.18749L1.6117 10.1807L0.985107 12.6554L1.1672 13.0342C1.71991 14.1842 2.82406 14.9702 4.09169 15.1159L5.15371 15.238C5.1998 15.2433 5.24225 15.2675 5.26814 15.3059C5.61761 15.8257 6.24937 16.0848 6.86684 15.9549Z'
                          fill='#FFD064'
                        />
                        <path
                          d='M19.5048 9.97888C18.6578 8.27941 17.6576 6.66062 16.5169 5.14261C15.0291 2.91094 12.2367 2.06904 9.82397 2.95614C10.9206 3.35676 11.9042 4.09699 12.6013 5.14261C13.7421 6.66062 14.7422 8.27941 15.5893 9.97888L22.0087 22.8577L25.1904 21.3855L19.5048 9.97888Z'
                          fill='#FFC250'
                        />
                        <path
                          d='M19.6742 13.383L19.7186 12.7946C19.7858 11.9051 19.4194 11.0378 18.7347 10.466L16.716 8.78023C16.4747 8.57874 16.1131 8.78688 16.1661 9.09675L16.6361 11.8414C16.6756 12.0721 16.8116 12.2749 17.0099 12.3991L19.0691 13.6888C19.3215 13.847 19.6517 13.6802 19.6742 13.383Z'
                          fill='#4A80AA'
                        />
                        <path
                          d='M18.7347 10.4661L16.716 8.7803C16.4747 8.5788 16.1131 8.78694 16.1661 9.09681L16.312 9.94862L17.0991 10.6059C17.7838 11.1777 18.1503 12.0449 18.083 12.9345L18.0732 13.0652L19.069 13.6889C19.3215 13.847 19.6517 13.6802 19.6742 13.3831L19.7186 12.7946C19.7858 11.9051 19.4194 11.0379 18.7347 10.4661Z'
                          fill='#407093'
                        />
                        <path
                          d='M13.3879 17.6197C13.6837 17.9167 14.0466 18.1382 14.4459 18.2656C14.5011 18.2832 14.5453 18.3249 14.566 18.3791L14.7367 18.8268C14.8549 19.1368 15.1721 19.3358 15.4995 19.2818C15.516 19.2791 15.5325 19.2758 15.549 19.2719L16.4505 19.0621C16.8143 18.9774 17.0852 19.3935 16.8606 19.6919L15.9297 20.9284C15.4013 21.6303 15.1335 22.4858 15.1572 23.3513H26.1626C26.346 23.3513 26.4772 23.1728 26.4208 22.9983C26.3059 22.6426 26.2195 22.278 26.1632 21.9077L25.671 18.67C25.4794 17.4099 24.9459 16.2265 24.1287 15.2484L21.9996 12.7002C21.2931 11.8547 20.3172 11.2779 19.2358 11.0667L19.1225 11.0446C17.7087 10.7685 16.2456 11.1419 15.1371 12.0618L14.6597 12.4579C13.9695 13.0307 13.6572 13.9411 13.8506 14.8169L14.0082 15.5308L13.0896 16.5422L13.125 17.3557L13.3879 17.6197Z'
                          fill='#407093'
                        />
                        <path
                          d='M7.71198 10.1504C8.09765 10.1504 8.41029 9.83773 8.41029 9.45206C8.41029 9.0664 8.09765 8.75375 7.71198 8.75375C7.32632 8.75375 7.01367 9.0664 7.01367 9.45206C7.01367 9.83773 7.32632 10.1504 7.71198 10.1504Z'
                          fill='#707DD3'
                        />
                        <path
                          d='M0.696879 12.0555L0.985125 12.6553L1.13663 12.252C1.23451 11.9916 1.48768 11.8226 1.76575 11.8322L2.48141 11.8569C2.76797 11.8668 2.92027 11.5222 2.72003 11.317L1.61166 10.1806L1.48162 10.2228C0.719133 10.4701 0.349624 11.333 0.696879 12.0555Z'
                          fill='#407093'
                        />
                        <path
                          d='M2.72002 11.317L1.61165 10.1806L1.4816 10.2228C1.22711 10.3054 1.0167 10.4568 0.861816 10.6483L1.78778 11.5977C1.85681 11.6684 1.89119 11.7525 1.89879 11.8368L2.48139 11.8569C2.76795 11.8668 2.92025 11.5222 2.72002 11.317Z'
                          fill='#365E7D'
                        />
                        <path
                          d='M4.7724 12.9745C5.02531 12.9745 5.23034 12.7694 5.23034 12.5165C5.23034 12.2636 5.02531 12.0586 4.7724 12.0586C4.51948 12.0586 4.31445 12.2636 4.31445 12.5165C4.31445 12.7694 4.51948 12.9745 4.7724 12.9745Z'
                          fill='#FFC250'
                        />
                        <path
                          d='M6.54242 12.9745C6.79533 12.9745 7.00036 12.7694 7.00036 12.5165C7.00036 12.2636 6.79533 12.0586 6.54242 12.0586C6.2895 12.0586 6.08447 12.2636 6.08447 12.5165C6.08447 12.7694 6.2895 12.9745 6.54242 12.9745Z'
                          fill='#FFC250'
                        />
                        <path
                          d='M5.79803 14.2459C6.05095 14.2459 6.25598 14.0408 6.25598 13.7879C6.25598 13.535 6.05095 13.33 5.79803 13.33C5.54512 13.33 5.34009 13.535 5.34009 13.7879C5.34009 14.0408 5.54512 14.2459 5.79803 14.2459Z'
                          fill='#FFC250'
                        />
                        <path
                          d='M16.0098 16.1798C16.3683 16.1798 16.6588 15.8892 16.6588 15.5308C16.6588 15.1724 16.3683 14.8818 16.0098 14.8818C15.6514 14.8818 15.3608 15.1724 15.3608 15.5308C15.3608 15.8892 15.6514 16.1798 16.0098 16.1798Z'
                          fill='#95D6A4'
                        />
                        <path
                          d='M13.6433 16.5013L13.0897 16.5423L13.033 16.6047C12.8762 16.7773 12.8607 17.0359 12.9958 17.226L13.1251 17.3558L13.7035 17.3129C13.9276 17.2963 14.0959 17.1011 14.0793 16.877C14.0627 16.6529 13.8678 16.4852 13.6433 16.5013Z'
                          fill='#E28086'
                        />
                        <path
                          d='M13.2494 6.65151L14.3001 6.70282L16.0543 6.47479C16.0543 6.47479 16.8545 6.56882 17.2516 6.16651C17.4899 5.92514 17.6701 5.62229 17.7653 5.27741L18.6991 1.89555C18.7993 1.53274 18.4578 1.20315 18.0988 1.31616L15.6882 2.07506C14.8644 2.33441 14.2002 2.94945 13.8784 3.7509L12.9201 6.13782C12.8242 6.37671 12.9923 6.63896 13.2494 6.65151Z'
                          fill='#FFE07D'
                        />
                        <path
                          d='M18.0987 1.31614L16.6848 1.76127C16.6853 1.80499 16.6797 1.84997 16.6671 1.89554L15.7333 5.27739C15.5373 5.9872 14.9815 6.5185 14.3 6.7028L15.7004 6.7712C16.6534 6.81776 17.5113 6.19713 17.7652 5.27739L18.699 1.89554C18.7992 1.53272 18.4577 1.20308 18.0987 1.31614Z'
                          fill='#FFD064'
                        />
                        <path
                          d='M16.7797 11.9067L16.893 11.9288C17.9744 12.14 18.9503 12.7168 19.6568 13.5623L21.786 16.1105C22.6033 17.0886 23.1367 18.2721 23.3283 19.5322L23.8206 22.7699C23.8503 22.9655 23.8892 23.1594 23.9354 23.3515H26.1628C26.3462 23.3515 26.4774 23.173 26.4211 22.9984C26.3062 22.6427 26.2197 22.2781 26.1634 21.9079L25.6711 18.6702C25.4795 17.4101 24.9461 16.2266 24.1289 15.2485L21.9997 12.7003C21.2932 11.8548 20.3173 11.278 19.2359 11.0668L19.1226 11.0447C17.8304 10.7924 16.4971 11.083 15.4309 11.8372C15.8768 11.7971 16.3307 11.819 16.7797 11.9067Z'
                          fill='#365E7D'
                        />
                        <path
                          d='M21.0773 13.2973C21.0773 13.2973 21.6635 12.7126 21.6922 12.3657C21.7351 11.8473 21.6314 11.32 21.3817 10.8474L20.1533 8.52195C20.0065 8.24399 19.5929 8.29946 19.5245 8.60627L18.9184 11.3241C18.8674 11.5525 18.9163 11.7917 19.0527 11.9819L20.0496 13.3718L21.0773 13.2973Z'
                          fill='#4A80AA'
                        />
                        <path
                          d='M21.3816 10.8475L20.1532 8.52198C20.0064 8.24402 19.5928 8.29949 19.5244 8.6063L19.3025 9.60129L19.9927 10.9078C20.3984 11.6758 20.4176 12.5882 20.0495 13.3719L20.4687 13.9563C20.6423 14.1984 21.0111 14.1693 21.1446 13.9028L21.4089 13.3753C21.8085 12.5776 21.7983 11.6362 21.3816 10.8475Z'
                          fill='#407093'
                        />
                        <path
                          d='M21.8908 27C23.65 27 25.0761 25.5739 25.0761 23.8147C25.0761 22.0556 23.65 20.6295 21.8908 20.6295C20.1317 20.6295 18.7056 22.0556 18.7056 23.8147C18.7056 25.5739 20.1317 27 21.8908 27Z'
                          fill='#B3E59F'
                        />
                        <path
                          d='M23.7585 21.2352C24.1392 21.76 24.3643 22.405 24.3643 23.1029C24.3643 24.8621 22.9382 26.2882 21.179 26.2882C20.4811 26.2882 19.8361 26.0631 19.3113 25.6824C19.8901 26.4805 20.8296 27 21.8908 27C23.6499 27 25.076 25.5739 25.076 23.8148C25.0761 22.7535 24.5566 21.8141 23.7585 21.2352Z'
                          fill='#95D6A4'
                        />
                        <path
                          d='M21.5329 25.0129C21.425 25.0129 21.3215 24.97 21.2451 24.8937L20.4341 24.0827C20.2752 23.9237 20.2752 23.6661 20.4341 23.5071C20.593 23.3483 20.8508 23.3483 21.0096 23.5071L21.5329 24.0304L22.8689 22.6943C23.0278 22.5355 23.2855 22.5355 23.4444 22.6943C23.6034 22.8532 23.6034 23.1109 23.4444 23.2698L21.8206 24.8937C21.7443 24.97 21.6408 25.0129 21.5329 25.0129Z'
                          fill='#F2FBFF'
                        />
                        <path
                          d='M12.781 22.4157C12.911 21.9771 12.5823 21.5369 12.1248 21.5369C11.6751 21.5369 11.3476 21.1105 11.4637 20.6759L11.5074 20.5121C11.6235 20.0776 11.296 19.6512 10.8462 19.6512H10.7546C10.3173 19.6512 9.99216 19.2466 10.0862 18.8195L10.1348 18.599C10.2289 18.172 9.90378 17.7674 9.46645 17.7674H8.5128L7.75875 20.2733C7.53875 21.0044 7.427 21.7637 7.427 22.5272V23.0801C7.427 23.23 7.54845 23.3515 7.69832 23.3515H12.5037L12.781 22.4157Z'
                          fill='#F9F6F6'
                        />
                        <path
                          d='M19.7033 16.9414L21.0874 17.132C21.31 17.1626 21.5154 17.0071 21.5461 16.7844C21.5768 16.5618 21.4211 16.3564 21.1984 16.3257L19.8143 16.1351C19.045 16.0291 18.2725 16.1587 17.5784 16.5102L16.7242 16.9472C16.555 17.0339 16.451 17.2127 16.4595 17.4028C16.4679 17.5928 16.5873 17.7617 16.7638 17.8331L17.7131 18.2166C18.1247 18.3788 18.4905 18.6453 18.771 18.9872L19.244 19.5637C19.3245 19.6618 19.4412 19.7125 19.5589 19.7125C19.6497 19.7125 19.7411 19.6823 19.8168 19.6202C19.9906 19.4777 20.0159 19.2213 19.8733 19.0474L19.4003 18.471C19.2133 18.2431 18.9974 18.0409 18.7599 17.8692C19.083 17.9409 19.3938 18.0648 19.6792 18.2382L20.8929 18.9757C20.959 19.0159 21.0319 19.0349 21.1039 19.0349C21.2414 19.0349 21.3755 18.9653 21.4521 18.8392C21.5688 18.6471 21.5077 18.3968 21.3156 18.2801L20.1019 17.5427C19.6265 17.2538 19.096 17.0729 18.5471 17.0091C18.9218 16.9116 19.313 16.8878 19.7033 16.9414Z'
                          fill='#4A80AA'
                        />
                      </g>
                      <defs>
                        <clipPath id='clip0_108_1552'>
                          <rect width='27' height='27' fill='white' />
                        </clipPath>
                      </defs>
                    </svg>
                    <span className='text-sm font-bold text-[#002A48] cursor-pointer'>
                      100% guarantee of pet identification
                    </span>
                  </div>
                </div>
                <div className='flex justify-start gap-5 items-center mt-5 cursor-pointer'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='20'
                    height='20'
                    viewBox='0 0 20 20'
                    fill='none'>
                    <path
                      d='M7.5 11.25L12.5 13.75M12.5 6.25L7.5 8.75M15 17.5C13.6193 17.5 12.5 16.3807 12.5 15C12.5 13.6193 13.6193 12.5 15 12.5C16.3807 12.5 17.5 13.6193 17.5 15C17.5 16.3807 16.3807 17.5 15 17.5ZM5 12.5C3.61929 12.5 2.5 11.3807 2.5 10C2.5 8.61929 3.61929 7.5 5 7.5C6.38071 7.5 7.5 8.61929 7.5 10C7.5 11.3807 6.38071 12.5 5 12.5ZM15 7.5C13.6193 7.5 12.5 6.38071 12.5 5C12.5 3.61929 13.6193 2.5 15 2.5C16.3807 2.5 17.5 3.61929 17.5 5C17.5 6.38071 16.3807 7.5 15 7.5Z'
                      stroke='#002A48'
                      stroke-width='2'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                  </svg>
                  <span className='text-sm font-bold leading-5 text-[#002A48]'>
                    Share
                  </span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='19'
                    height='19'
                    viewBox='0 0 19 19'
                    fill='none'>
                    <g clip-path='url(#clip0_108_1610)'>
                      <path
                        d='M18.7692 9.38461C18.7692 4.20163 14.5676 0 9.38461 0C4.20163 0 0 4.20163 0 9.38461C0 14.0687 3.4318 17.9512 7.91827 18.6552V12.0974H5.53546V9.38461H7.91827V7.31707C7.91827 4.96505 9.31936 3.66587 11.463 3.66587C12.4894 3.66587 13.5637 3.84916 13.5637 3.84916V6.15865H12.3804C11.2146 6.15865 10.851 6.88211 10.851 7.625V9.38461H13.4537L13.0376 12.0974H10.851V18.6552C15.3374 17.9512 18.7692 14.0687 18.7692 9.38461Z'
                        fill='#99A2A5'
                      />
                    </g>
                    <defs>
                      <clipPath id='clip0_108_1610'>
                        <rect width='18.7692' height='18.7692' fill='white' />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='20'
                    height='19'
                    viewBox='0 0 20 19'
                    fill='none'>
                    <g clip-path='url(#clip0_108_1611)'>
                      <path
                        d='M6.64826 17.0097C13.7292 17.0097 17.6033 11.1417 17.6033 6.05458C17.6033 5.88962 17.5997 5.72099 17.5923 5.55603C18.346 5.01101 18.9963 4.33594 19.5129 3.56253C18.811 3.8748 18.0658 4.07875 17.3027 4.1674C18.1062 3.68579 18.7078 2.9292 18.996 2.03789C18.2401 2.48585 17.4135 2.80184 16.5516 2.97232C15.9708 2.35525 15.203 1.94667 14.3667 1.80976C13.5305 1.67285 12.6724 1.81523 11.9252 2.2149C11.178 2.61456 10.5833 3.24924 10.2329 4.02082C9.88262 4.7924 9.79623 5.65789 9.98713 6.48349C8.45663 6.40669 6.95935 6.0091 5.59236 5.31651C4.22537 4.62392 3.01918 3.65179 2.052 2.46314C1.56043 3.31067 1.41 4.31357 1.6313 5.26802C1.8526 6.22247 2.42902 7.05685 3.24341 7.60158C2.63202 7.58217 2.03402 7.41756 1.49882 7.12135V7.16901C1.49827 8.05842 1.80575 8.92059 2.369 9.60894C2.93224 10.2973 3.71648 10.7693 4.58841 10.9448C4.02205 11.0998 3.42764 11.1224 2.85116 11.0108C3.0972 11.7757 3.57591 12.4447 4.22047 12.9245C4.86504 13.4042 5.6433 13.6708 6.44664 13.6869C5.0828 14.7582 3.39807 15.3393 1.66378 15.3366C1.35622 15.3361 1.04896 15.3172 0.743652 15.2801C2.5055 16.4104 4.555 17.0107 6.64826 17.0097Z'
                        fill='#99A2A5'
                      />
                    </g>
                    <defs>
                      <clipPath id='clip0_108_1611'>
                        <rect
                          width='18.7692'
                          height='18.7692'
                          fill='white'
                          transform='translate(0.743652)'
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='20'
                    height='19'
                    viewBox='0 0 20 19'
                    fill='none'>
                    <path
                      d='M9.87192 1.68996C12.3794 1.68996 12.6763 1.70096 13.6624 1.74495C14.5789 1.78528 15.0738 1.93924 15.4037 2.06755C15.8399 2.23618 16.1552 2.44147 16.4815 2.76773C16.8114 3.09766 17.013 3.40925 17.1817 3.84549C17.31 4.17542 17.4639 4.67398 17.5043 5.58678C17.5482 6.57656 17.5592 6.8735 17.5592 9.37728C17.5592 11.8847 17.5482 12.1817 17.5043 13.1678C17.4639 14.0843 17.31 14.5791 17.1817 14.9091C17.013 15.3453 16.8077 15.6606 16.4815 15.9868C16.1515 16.3168 15.8399 16.5184 15.4037 16.687C15.0738 16.8153 14.5752 16.9693 13.6624 17.0096C12.6726 17.0536 12.3757 17.0646 9.87192 17.0646C7.36447 17.0646 7.06753 17.0536 6.08142 17.0096C5.16495 16.9693 4.67006 16.8153 4.34013 16.687C3.90389 16.5184 3.58863 16.3131 3.26236 15.9868C2.93244 15.6569 2.73081 15.3453 2.56218 14.9091C2.43388 14.5791 2.27991 14.0806 2.23959 13.1678C2.1956 12.178 2.1846 11.8811 2.1846 9.37728C2.1846 6.86983 2.1956 6.5729 2.23959 5.58678C2.27991 4.67031 2.43388 4.17542 2.56218 3.84549C2.73081 3.40925 2.9361 3.09399 3.26236 2.76773C3.59229 2.4378 3.90389 2.23618 4.34013 2.06755C4.67006 1.93924 5.16862 1.78528 6.08142 1.74495C7.06753 1.70096 7.36447 1.68996 9.87192 1.68996ZM9.87192 0C7.32414 0 7.00521 0.0109976 6.00443 0.054988C5.00732 0.0989784 4.3218 0.260276 3.72793 0.491226C3.1084 0.733173 2.58418 1.0521 2.06363 1.57632C1.53941 2.09687 1.22048 2.62109 0.978531 3.23696C0.747581 3.8345 0.586283 4.51635 0.542293 5.51346C0.498302 6.51791 0.487305 6.83684 0.487305 9.38462C0.487305 11.9324 0.498302 12.2513 0.542293 13.2521C0.586283 14.2492 0.747581 14.9347 0.978531 15.5286C1.22048 16.1481 1.53941 16.6724 2.06363 17.1929C2.58418 17.7135 3.1084 18.0361 3.72426 18.2743C4.3218 18.5053 5.00365 18.6666 6.00077 18.7106C7.00155 18.7546 7.32048 18.7656 9.86825 18.7656C12.416 18.7656 12.735 18.7546 13.7357 18.7106C14.7329 18.6666 15.4184 18.5053 16.0122 18.2743C16.6281 18.0361 17.1523 17.7135 17.6729 17.1929C18.1934 16.6724 18.516 16.1481 18.7543 15.5323C18.9853 14.9347 19.1466 14.2529 19.1906 13.2558C19.2345 12.255 19.2455 11.9361 19.2455 9.38828C19.2455 6.84051 19.2345 6.52157 19.1906 5.52079C19.1466 4.52368 18.9853 3.83816 18.7543 3.24429C18.5234 2.62109 18.2044 2.09687 17.6802 1.57632C17.1597 1.05577 16.6354 0.733173 16.0196 0.494892C15.422 0.263942 14.7402 0.102644 13.7431 0.0586538C12.7386 0.0109976 12.4197 0 9.87192 0Z'
                      fill='#99A2A5'
                    />
                    <path
                      d='M9.87188 4.564C7.21046 4.564 5.05127 6.72319 5.05127 9.38461C5.05127 12.046 7.21046 14.2052 9.87188 14.2052C12.5333 14.2052 14.6925 12.046 14.6925 9.38461C14.6925 6.72319 12.5333 4.564 9.87188 4.564ZM9.87188 12.5116C8.14526 12.5116 6.7449 11.1112 6.7449 9.38461C6.7449 7.65799 8.14526 6.25763 9.87188 6.25763C11.5985 6.25763 12.9989 7.65799 12.9989 9.38461C12.9989 11.1112 11.5985 12.5116 9.87188 12.5116Z'
                      fill='#99A2A5'
                    />
                    <path
                      d='M16.0087 4.37335C16.0087 4.99654 15.5028 5.49877 14.8832 5.49877C14.26 5.49877 13.7578 4.99288 13.7578 4.37335C13.7578 3.75015 14.2637 3.24792 14.8832 3.24792C15.5028 3.24792 16.0087 3.75381 16.0087 4.37335Z'
                      fill='#99A2A5'
                    />
                  </svg>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='19'
                    height='14'
                    viewBox='0 0 19 14'
                    fill='none'>
                    <path
                      d='M18.813 3.63082C18.813 3.63082 18.6297 2.33677 18.0651 1.76856C17.3503 1.02072 16.5511 1.01706 16.1846 0.973065C13.5598 0.78244 9.61899 0.78244 9.61899 0.78244H9.61166C9.61166 0.78244 5.67086 0.78244 3.0461 0.973065C2.67951 1.01706 1.88035 1.02072 1.16551 1.76856C0.600965 2.33677 0.421338 3.63082 0.421338 3.63082C0.421338 3.63082 0.230713 5.15215 0.230713 6.66982V8.09218C0.230713 9.60984 0.417672 11.1312 0.417672 11.1312C0.417672 11.1312 0.600965 12.4252 1.16184 12.9934C1.87669 13.7413 2.81515 13.7156 3.23306 13.7963C4.73606 13.9392 9.61533 13.9832 9.61533 13.9832C9.61533 13.9832 13.5598 13.9759 16.1846 13.7889C16.5511 13.7449 17.3503 13.7413 18.0651 12.9934C18.6297 12.4252 18.813 11.1312 18.813 11.1312C18.813 11.1312 18.9999 9.61351 18.9999 8.09218V6.66982C18.9999 5.15215 18.813 3.63082 18.813 3.63082ZM7.67609 9.8188V4.54362L12.746 7.19037L7.67609 9.8188Z'
                      fill='#99A2A5'
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className='w-[590px] h-[500px] bg-transparent rounded-2xl '>
              <div className='flex flex-col gap-4'>
                <div className='flex items-center gap-1 text-[#667479] cursor-pointer'>
                  <span>Home</span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'>
                    <path
                      d='M11 9L14 12L11 15'
                      stroke='#667479'
                      stroke-width='1.5'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                  </svg>
                  <span>Dog</span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'>
                    <path
                      d='M11 9L14 12L11 15'
                      stroke='#667479'
                      stroke-width='1.5'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                  </svg>
                  <span>Large Dog</span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'>
                    <path
                      d='M11 9L14 12L11 15'
                      stroke='#667479'
                      stroke-width='1.5'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                  </svg>
                  <span>Shiba Inu Sepia</span>
                </div>
                <div className='space-y-3'>
                  <div className='font-normal text-sm leading-5 text-[#99A2A5]'>
                    SKU #1000078
                  </div>
                  <h1 className='font-bold text-2xl leading-9 text-[#00171F]'>
                    Shiba Inu Sepia
                  </h1>
                  <h3 className='font-bold text-xl leading-8 text-[#002A48]'>
                    34.000.000 VND
                  </h3>
                </div>
                <div className='flex items-center gap-4'>
                  <ButtonType2
                    title='Contact us'
                    bg='bg-[#002A48]'
                    textColor='text-white'
                  />
                  <ButtonType2
                    title='Chat with Monito'
                    bg='bg-translate'
                    icon={
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'>
                        <path
                          d='M21 14.8V7.19995V7.19666C21 6.07875 21 5.51945 20.7822 5.09204C20.5905 4.71572 20.2841 4.40973 19.9078 4.21799C19.48 4 18.9203 4 17.8002 4H6.2002C5.08009 4 4.51962 4 4.0918 4.21799C3.71547 4.40973 3.40973 4.71572 3.21799 5.09204C3 5.51986 3 6.07985 3 7.19995V18.671C3 19.7367 3 20.2696 3.21846 20.5432C3.40845 20.7813 3.69644 20.9197 4.00098 20.9194C4.35115 20.919 4.76744 20.5861 5.59961 19.9203L7.12357 18.7012C7.44844 18.4413 7.61084 18.3114 7.79172 18.219C7.95219 18.137 8.12279 18.0771 8.29932 18.0408C8.49829 18 8.70652 18 9.12256 18H17.8001C18.9202 18 19.48 18 19.9078 17.782C20.2841 17.5902 20.5905 17.2844 20.7822 16.908C21 16.4806 21 15.9212 21 14.8032V14.8Z'
                          stroke='#002A48'
                          stroke-width='2'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                      </svg>
                    }
                    textColor='text-[#002A48]'
                    border='border-2'
                    styleBorder='border-[#002A48]'
                  />
                </div>
                <div>
                  {data.map((item) => (
                    <>
                      <div
                        className='flex justify-start'
                        style={{ padding: '8px 0px' }}>
                        <div
                          className='w-48 font-normal leading-5 text-sm text-[#667479]'
                          style={{ padding: '4px 11px 2px 11px' }}>
                          {item.title}
                        </div>
                        <div
                          className='font-normal leading-5 text-sm text-[#667479]'
                          style={{ padding: '4px 11px 2px 11px' }}>
                          {item.name}
                        </div>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='justify-center flex rounded-xl'>
        <div className='w-[1280px] h-auto bg-transparent'>
          <div className='space-y-4'>
            <h1 className='font-bold leading-8 text-2xl text-[#00171F] mt-2'>
              Our lovely customer
            </h1>
            <Love />
          </div>
        </div>
      </div>
      <div className='justify-center flex rounded-xl mt-10 p-6'>
        <div className='w-[1280px] h-auto bg-transparent'>
          <h5 className='title'>Whats new?</h5>
          <h1 className='title2'>See more puppies</h1>
          <div className='grid grid-cols-4 gap-14 p-7'>
            {data2.map((item) => (
              // eslint-disable-next-line react/jsx-key
              <div className='bg-white-400 rounded-2xl w-[300px] h-[400px] shadow-lg cursor-pointer'>
                <div className='flex justify-center mt-2'>
                  <Link href={`/category/${item.name}`}>
                    <Image
                      src={item.img}
                      alt='img1'
                      width={264}
                      height={264}
                      className='rounded-2xl border-none  transition duration-300 ease-in-out hover:scale-110 cursor-pointer'
                    />
                  </Link>
                </div>
                <div className='p-5 flex flex-col gap-2'>
                  <h1 className='items-stretch text-base leading-6 font-bold text-black'>
                    {item.name}
                  </h1>
                  <div className='flex gap-5'>
                    <div>
                      <p className='font-normal text-xs leading-4 text-[#667479]'>
                        Gene:{' '}
                        <span className='font-bold text-xs leading-4 text-[#667479]'>
                          {item.sex}
                        </span>
                      </p>
                    </div>
                    <div className='font-normal text-xs leading-4 text-[#667479]'>
                      -
                    </div>
                    <div>
                      <p className='font-normal text-xs leading-4 text-[#667479]'>
                        Age:{' '}
                        <span className='font-bold text-xs leading-4 text-[#667479]'>
                          {item.age}
                        </span>
                      </p>
                    </div>
                  </div>
                  <h1 className='font-bold text-base leading-5 text-black'>
                    {item.price}
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default DogInfo
