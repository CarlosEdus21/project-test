<template>
    <body>
        <!-- Builderall.appshell (Wrapper) component -->
        <builderall-appshell></builderall-appshell>

        <!-- Structure with banner, sidebar, ... -->
        <div class='ba-app-content'>
            <div class='ba-banner'>
                <input type='checkbox' class='ba-input-status' id='ba-toggle-info'>
                <div class='ba-header'>
                    <div class='ba-header-left'>
                        <span class='ba-icon'> <svg xmlns="http://www.w3.org/2000/svg" width="36" height="38"
                                viewBox="0 0 36 38" fill="none">
                                <path
                                    d="M17.1543 8.20817C15.9399 8.38416 13.8631 9.40497 12.9479 10.2674C12.1031 11.0594 11.9447 11.7986 12.5079 12.309C13.0183 12.7666 13.5639 12.661 14.4439 11.9218C15.9399 10.6722 16.6439 10.4082 18.4391 10.4082C19.8295 10.4082 20.1463 10.4786 20.9383 10.901C22.1351 11.517 23.0151 12.309 23.5431 13.2066C24.3879 14.6674 24.5287 15.3538 24.6695 18.9442C24.8103 22.3762 24.9335 23.0274 25.8311 25.3154C25.9543 25.6146 25.5319 25.6322 18.4391 25.6322C11.3463 25.6322 10.9239 25.6146 11.0471 25.3154C12.0855 22.869 12.3671 21.3554 12.3671 18.3634C12.3671 16.8322 12.4551 15.6882 12.6487 14.9314C12.8599 14.0866 12.8951 13.6994 12.7367 13.3826C12.5079 12.8898 11.8391 12.6786 11.3111 12.9602C10.5719 13.3474 10.3783 14.245 10.2375 17.7122C10.0615 21.9714 9.69193 23.573 8.38953 25.4562C7.73833 26.4066 7.61513 27.1986 8.09033 27.5858C8.30153 27.7794 9.28713 27.8498 12.2615 27.885L16.1511 27.9554L16.4503 28.6242C16.7671 29.3986 17.6471 30.0322 18.4039 30.0322C19.4599 30.0322 20.6391 29.0642 20.6391 28.2018C20.6391 27.9554 21.0791 27.9202 24.5111 27.9202H28.4007L28.8231 27.4802C29.4215 26.8994 29.3863 26.6354 28.5767 25.4386C27.2391 23.4322 26.7991 21.637 26.7991 18.0642C26.7991 14.685 26.1831 12.7138 24.5815 10.8834C22.7863 8.82417 19.9351 7.80337 17.1543 8.20817Z"
                                    fill="#0072E1" />
                            </svg> </span>
                        <span class='ba-span'>Browser Notifications</span>
                    </div>
                    <label class='ba-label' for='ba-toggle-info'></label>
                </div>
                <div class='ba-tool-description'>
                    <span class='ba-span'>Send notifications to the browsers of users</span>
                    <span class='ba-span'>When people agree on receiving notifications from you, you will be able to send
                        them messages straight to their browsers even if they are not on you website.</span>
                </div>
                <div class='ba-app-wrapper ba-gp-1'>
                    <div class='ba-sidebar'>
                        <ul class='ba-nav'>
                            <li class='ba-nav-item'>
                                <a href='YOUR_LINK' class='ba-link ba-is-active'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"
                                        fill="none">
                                        <path
                                            d="M14.8011 29.7656C13.0941 29.7656 11.7054 28.3957 11.7054 26.7094C11.7054 26.1623 11.8549 25.6225 12.137 25.1539C12.5782 24.419 13.5402 24.1764 14.2851 24.6116C14.4901 24.7306 14.6564 24.8899 14.7818 25.0707C14.9048 24.8828 15.0711 24.7187 15.2785 24.5926C16.0138 24.1431 16.9831 24.3786 17.4387 25.104C17.7401 25.5868 17.9016 26.1409 17.9016 26.7094C17.9016 28.3933 16.5129 29.7656 14.8035 29.7656H14.8011Z"
                                            fill="#0072E1" />
                                        <path
                                            d="M28.0375 26.814C27.5939 26.814 27.1551 26.6309 26.844 26.2717C24.3655 23.4058 23.1094 19.598 23.1094 14.953V11.7754C23.1094 6.98772 19.382 3.09429 14.8011 3.09429C12.5179 3.09429 10.3914 4.04327 8.8074 5.76285C8.22635 6.3955 7.23543 6.44307 6.59411 5.86988C5.95279 5.29669 5.90457 4.31917 6.48562 3.68651C8.63863 1.34379 11.6693 0 14.8011 0C21.1107 0 26.2437 5.28241 26.2437 11.7731V14.9506C26.2437 18.8393 27.2491 21.974 29.2285 24.262C29.7903 24.9113 29.7107 25.8864 29.0525 26.4406C28.7584 26.688 28.3967 26.8093 28.0351 26.8093L28.0375 26.814Z"
                                            fill="#0072E1" />
                                        <path
                                            d="M28.0351 26.814H1.5672C0.954804 26.814 0.400275 26.4644 0.14471 25.915C-0.110856 25.368 -0.021649 24.7234 0.376165 24.2644C2.35559 21.974 3.36098 18.8416 3.36098 14.953V11.7754C3.36098 10.2533 3.64065 8.77152 4.19036 7.37064C4.50138 6.57388 5.40791 6.17907 6.218 6.48588C7.02569 6.79507 7.42591 7.68935 7.11489 8.48611C6.70502 9.53023 6.49768 10.6362 6.49768 11.7754V14.953C6.49768 18.3327 5.83224 21.27 4.51584 23.7221H28.0399C28.9055 23.7221 29.6071 24.4142 29.6071 25.2681C29.6071 26.1219 28.9055 26.814 28.0399 26.814H28.0351Z"
                                            fill="#0072E1" />
                                    </svg>
                                    <span class='ba-title'>Dashboard</span>
                                </a>
                            </li>
                            <li class='ba-nav-item'>
                                <a href='YOUR_LINK' class='ba-link'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none">
                                        <g clip-path="url(#clip0_322_3810)">
                                            <path
                                                d="M12 0C5.3832 0 0 5.3832 0 12C0 18.6168 5.3832 24 12 24C18.6168 24 24 18.6168 24 12C24 5.3832 18.6168 0 12 0ZM17.1 12.9H12.9V17.1C12.9 17.5974 12.4968 18 12 18C11.5032 18 11.1 17.5974 11.1 17.1V12.9H6.9C6.4032 12.9 6 12.4974 6 12C6 11.5026 6.4032 11.1 6.9 11.1H11.1V6.9C11.1 6.4026 11.5032 6 12 6C12.4968 6 12.9 6.4026 12.9 6.9V11.1H17.1C17.5968 11.1 18 11.5026 18 12C18 12.4974 17.5968 12.9 17.1 12.9Z"
                                                fill="#4D5D71" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_322_3810">
                                                <rect width="24" height="24" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <span class='ba-title'>Add campaigns</span>
                                </a>
                            </li>
                            <li class='ba-nav-item'>
                                <a href='YOUR_LINK' class='ba-link'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"
                                        fill="none">
                                        <g clip-path="url(#clip0_322_3796)">
                                            <path
                                                d="M22.5 15C22.5 15.6875 23.0625 16.25 23.75 16.25H26.25C26.9375 16.25 27.5 15.6875 27.5 15C27.5 14.3125 26.9375 13.75 26.25 13.75H23.75C23.0625 13.75 22.5 14.3125 22.5 15Z"
                                                fill="#4D5D71" />
                                            <path
                                                d="M20.7369 21.0249C20.3244 21.5749 20.4369 22.3374 20.9869 22.7374C21.6494 23.2249 22.3494 23.7499 23.0119 24.2499C23.5619 24.6624 24.3369 24.5499 24.7369 23.9999C24.7369 23.9874 24.7494 23.9874 24.7494 23.9749C25.1619 23.4249 25.0494 22.6499 24.4994 22.2499C23.8369 21.7499 23.1369 21.2249 22.4869 20.7374C21.9369 20.3249 21.1619 20.4499 20.7494 20.9999C20.7494 21.0124 20.7369 21.0249 20.7369 21.0249Z"
                                                fill="#4D5D71" />
                                            <path
                                                d="M24.763 6.01243C24.763 5.99993 24.7505 5.99993 24.7505 5.98743C24.338 5.43743 23.563 5.32493 23.0255 5.73743C22.363 6.23743 21.6505 6.76243 21.0005 7.26243C20.4505 7.67493 20.3505 8.44993 20.763 8.98743C20.763 8.99993 20.7755 8.99993 20.7755 9.01243C21.188 9.56243 21.9505 9.67493 22.5005 9.26243C23.163 8.77493 23.863 8.23743 24.5255 7.73743C25.063 7.33743 25.163 6.56243 24.763 6.01243Z"
                                                fill="#4D5D71" />
                                            <path
                                                d="M10 11.25H5C3.625 11.25 2.5 12.375 2.5 13.75V16.25C2.5 17.625 3.625 18.75 5 18.75H6.25V22.5C6.25 23.1875 6.8125 23.75 7.5 23.75C8.1875 23.75 8.75 23.1875 8.75 22.5V18.75H10L16.25 22.5V7.5L10 11.25Z"
                                                fill="#4D5D71" />
                                            <path
                                                d="M19.375 15C19.375 13.3375 18.65 11.8375 17.5 10.8125V19.175C18.65 18.1625 19.375 16.6625 19.375 15Z"
                                                fill="#4D5D71" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_322_3796">
                                                <rect width="30" height="30" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <span class='ba-title'>Campaigns</span>
                                </a>
                            </li>
                        </ul>
                        <div class='ba-bottom'>
                            <div class='ba-overview'>
                                <div class='ba-video-thumb'>
                                    <img src='https://placehold.co/159x107/000000/AAAAAA' alt='Overview Tools Name'>
                                    <button class='ba-button'>
                                        <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor'
                                            class='bi bi-arrows-angle-expand' viewBox='0 0 16 16'>
                                            <path fill-rule='evenodd'
                                                d='M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707z' />
                                        </svg>
                                    </button>
                                </div>
                                <span class='ba-title'>Overview Tools Name </span>
                                <span class='ba-description'>Here we can insert a text with a written 3-line rule that
                                    better justifies the concept of the tool in use and not exceed.</span>
                                <button class='ba-btn ba-sm ba-blue ba-w-100'>
                                    More Info
                                    <svg xmlns='http://www.w3.org/2000/svg' width='10' height='10' fill='#fff'
                                        class='bi bi-arrow-up-right' viewBox='0 0 16 16'>
                                        <path fill-rule='evenodd'
                                            d='M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z' />
                                    </svg>
                                </button>
                            </div>
                            <ul class='ba-bottom-list'>
                                <li>
                                    <a href='#' class='ba-flutuant-link'>
                                        <span class='ba-icon'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"
                                                viewBox="0 0 30 30" fill="none">
                                                <g clip-path="url(#clip0_322_3760)">
                                                    <path
                                                        d="M15 2.5C8.1 2.5 2.5 8.1 2.5 15C2.5 21.9 8.1 27.5 15 27.5C21.9 27.5 27.5 21.9 27.5 15C27.5 8.1 21.9 2.5 15 2.5ZM16.25 23.75H13.75V21.25H16.25V23.75ZM18.8375 14.0625L17.7125 15.2125C17.0875 15.85 16.6375 16.425 16.4125 17.325C16.3125 17.725 16.25 18.175 16.25 18.75H13.75V18.125C13.75 17.55 13.85 17 14.025 16.4875C14.275 15.7625 14.6875 15.1125 15.2125 14.5875L16.7625 13.0125C17.3375 12.4625 17.6125 11.6375 17.45 10.7625C17.2875 9.8625 16.5875 9.1 15.7125 8.85C14.325 8.4625 13.0375 9.25 12.625 10.4375C12.475 10.9 12.0875 11.25 11.6 11.25H11.225C10.5 11.25 10 10.55 10.2 9.85C10.7375 8.0125 12.3 6.6125 14.2375 6.3125C16.1375 6.0125 17.95 7 19.075 8.5625C20.55 10.6 20.1125 12.7875 18.8375 14.0625Z"
                                                        fill="#4D5D71" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_322_3760">
                                                        <rect width="30" height="30" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </span>
                                        <span class='ba-text'>Help</span>
                                    </a>
                                </li>
                                <li>
                                    <a href='#' class='ba-flutuant-link'>
                                        <span class='ba-icon'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                                viewBox="0 0 18 18" fill="none">
                                                <g clip-path="url(#clip0_322_3771)">
                                                    <path
                                                        d="M8.24958 6.56256V9.32256C8.24958 9.58506 8.39208 9.83256 8.61708 9.96756L10.9571 11.3551C11.2271 11.5126 11.5721 11.4226 11.7296 11.1601C11.8871 10.8901 11.8046 10.5451 11.5346 10.3876L9.38208 9.10506V6.55506C9.37458 6.25506 9.11958 6.00006 8.81208 6.00006C8.50458 6.00006 8.24958 6.25506 8.24958 6.56256ZM15.7496 7.12506V3.15756C15.7496 2.82006 15.3446 2.65506 15.1121 2.89506L13.7771 4.23006C12.4196 2.87256 10.4846 2.09256 8.36958 2.28006C5.22708 2.56506 2.63958 5.09256 2.29458 8.23506C1.84458 12.3001 5.01708 15.7501 8.99958 15.7501C12.4421 15.7501 15.2846 13.1701 15.6971 9.84006C15.7496 9.39006 15.3971 9.00006 14.9471 9.00006C14.5721 9.00006 14.2571 9.27756 14.2121 9.64506C13.8896 12.2626 11.6321 14.2876 8.92458 14.2501C6.14208 14.2126 3.79458 11.8651 3.74958 9.07506C3.70458 6.15006 6.08208 3.75006 8.99958 3.75006C10.4471 3.75006 11.7596 4.34256 12.7121 5.28756L11.1446 6.85506C10.9046 7.09506 11.0696 7.50006 11.4071 7.50006H15.3746C15.5846 7.50006 15.7496 7.33506 15.7496 7.12506Z"
                                                        fill="white" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_322_3771">
                                                        <rect width="18" height="18" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </span>
                                        <span class='ba-text'>Updates Log</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class='ba-container ba-flex ba-gp-1 ba-f-column'>

                        <div class='ba-card ba-w-100'>
                            <div class='ba-top'>
                                <span class='ba-title'>Activity</span>
                                <div class='ba-box-items ba-flex ba-gp-1'>
                                    <div class='ba-box-tabs'>
                                        <a href='/#/bn' class='ba-tab ba-is-active'>7 days</a>
                                        <a href='/#/bn' class='ba-tab'>30 days</a>
                                        <a href='/#/bn' class='ba-tab'>All time</a>
                                    </div>
                                </div>
                            </div>
                            <div class='ba-content ba-w-100 ba-flex ba-gp-1'>
                                <div class='ba-card ba-statistics ba-w-100'>
                                    <div class='ba-top'>
                                        <span class='ba-icon'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                viewBox="0 0 20 20" fill="none">
                                                <g clip-path="url(#clip0_322_3847)">
                                                    <path
                                                        d="M15 9.99999C15 10.4583 15.375 10.8333 15.8333 10.8333H17.5C17.9583 10.8333 18.3333 10.4583 18.3333 9.99999C18.3333 9.54166 17.9583 9.16666 17.5 9.16666H15.8333C15.375 9.16666 15 9.54166 15 9.99999Z"
                                                        fill="#8D9EB5" />
                                                    <path
                                                        d="M13.824 14.0166C13.549 14.3832 13.624 14.8916 13.9906 15.1582C14.4323 15.4832 14.899 15.8332 15.3406 16.1666C15.7073 16.4416 16.224 16.3666 16.4906 15.9999C16.4906 15.9916 16.499 15.9916 16.499 15.9832C16.774 15.6166 16.699 15.0999 16.3323 14.8332C15.8906 14.4999 15.424 14.1499 14.9906 13.8249C14.624 13.5499 14.1073 13.6332 13.8323 13.9999C13.8323 14.0082 13.824 14.0166 13.824 14.0166Z"
                                                        fill="#8D9EB5" />
                                                    <path
                                                        d="M16.5074 4.00829C16.5074 3.99996 16.499 3.99996 16.499 3.99162C16.224 3.62496 15.7074 3.54996 15.349 3.82496C14.9074 4.15829 14.4324 4.50829 13.999 4.84162C13.6324 5.11662 13.5657 5.63329 13.8407 5.99162C13.8407 5.99996 13.849 5.99996 13.849 6.00829C14.124 6.37496 14.6324 6.44996 14.999 6.17496C15.4407 5.84996 15.9074 5.49162 16.349 5.15829C16.7074 4.89162 16.774 4.37496 16.5074 4.00829Z"
                                                        fill="#8D9EB5" />
                                                    <path
                                                        d="M6.66602 7.5H3.33268C2.41602 7.5 1.66602 8.25 1.66602 9.16667V10.8333C1.66602 11.75 2.41602 12.5 3.33268 12.5H4.16602V15C4.16602 15.4583 4.54102 15.8333 4.99935 15.8333C5.45768 15.8333 5.83268 15.4583 5.83268 15V12.5H6.66602L10.8327 15V5L6.66602 7.5Z"
                                                        fill="#8D9EB5" />
                                                    <path
                                                        d="M12.916 10.0002C12.916 8.89183 12.4327 7.89183 11.666 7.2085V12.7835C12.4327 12.1085 12.916 11.1085 12.916 10.0002Z"
                                                        fill="#8D9EB5" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_322_3847">
                                                        <rect width="20" height="20" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </span>
                                        <span class='ba-title'>Campaigns</span>
                                    </div>
                                    <div class='ba-content ba-jc-fs'>
                                        <span class='ba-data'>07</span>
                                    </div>
                                    <div class='ba-bottom'>
                                        <span class=''>
                                            last 7 days
                                            <span class="ba-icon"><svg xmlns="http://www.w3.org/2000/svg" width="18"
                                                    height="18" viewBox="0 0 18 18" fill="none">
                                                    <g clip-path="url(#clip0_322_3860)">
                                                        <path
                                                            d="M12 4.5L13.7175 6.2175L10.0575 9.8775L7.0575 6.8775L1.5 12.4425L2.5575 13.5L7.0575 9L10.0575 12L14.7825 7.2825L16.5 9V4.5H12Z"
                                                            fill="#01D4B9" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_322_3860">
                                                            <rect width="18" height="18" fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg></span>
                                            <b class='ba-green'>16%</b>
                                        </span>
                                    </div>
                                </div>
                                <div class='ba-card ba-statistics ba-w-100'>
                                    <div class='ba-top'>
                                        <span class='ba-icon'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                                viewBox="0 0 18 18" fill="none">
                                                <path
                                                    d="M7.71431 0C5.35117 0 3.4286 1.92257 3.4286 4.28571C3.4286 6.64885 5.35117 8.57142 7.71431 8.57142C10.0774 8.57142 12 6.64885 12 4.28571C12 1.92257 10.0774 0 7.71431 0ZM2.78574 10.2857C1.72246 10.2857 0.85717 11.151 0.85717 12.2143V12.5407C0.85717 13.5496 1.27696 14.5195 2.00895 15.2009C2.95995 16.0867 4.7216 17.1428 7.71431 17.1428C7.94959 17.1428 8.17455 17.1343 8.39483 17.1219C7.44426 16.1225 6.85717 14.7737 6.85717 13.2857C6.85717 12.18 7.18315 11.1523 7.73858 10.2857H2.78574Z"
                                                    fill="#8E9EB5" />
                                                <path
                                                    d="M12.4285 8.57144C9.82498 8.57144 7.71427 10.6822 7.71427 13.2857C7.71427 15.8893 9.82498 18 12.4285 18C15.0321 18 17.1428 15.8893 17.1428 13.2857C17.1428 10.6822 15.0321 8.57144 12.4285 8.57144ZM15 11.1429C15.1096 11.1429 15.2192 11.1846 15.303 11.2684C15.4706 11.436 15.4706 11.7069 15.303 11.8745L11.8744 15.303C11.7908 15.3866 11.6811 15.4286 11.5714 15.4286C11.4617 15.4286 11.352 15.3866 11.2684 15.303L9.55411 13.5887C9.38654 13.4212 9.38654 13.1503 9.55411 12.9827C9.72168 12.8151 9.99256 12.8151 10.1601 12.9827L11.5714 14.394L14.697 11.2684C14.7807 11.1846 14.8904 11.1429 15 11.1429Z"
                                                    fill="#8E9EB5" />
                                            </svg>
                                        </span>
                                        <span class='ba-title'>Subscribers</span>
                                    </div>
                                    <div class='ba-content ba-jc-fs'>
                                        <span class='ba-data'>03</span>
                                    </div>
                                </div>
                                <div class='ba-card ba-statistics ba-w-100'>
                                    <div class='ba-top'>
                                        <span class='ba-icon'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                                viewBox="0 0 18 18" fill="none">
                                                <path
                                                    d="M8.57143 8.05287L0.00857142 3.42858C0.12 2.10858 1.22571 1.07144 2.57143 1.07144H14.5714C15.9171 1.07144 17.0229 2.10858 17.1343 3.42858L8.57143 8.05287ZM8.46857 9.42001C7.98857 10.2429 7.71429 11.1943 7.71429 12.2143C7.71429 13.14 7.94143 14.0143 8.34429 14.7857H2.57143C1.15286 14.7857 0 13.6329 0 12.2143V4.88144L8.26714 9.35144C8.33143 9.38573 8.4 9.41144 8.46857 9.42001ZM17.1429 4.88144V8.19858C16.2686 7.3543 15.1157 6.79287 13.8343 6.67287L17.1429 4.88144ZM13.2857 7.50001C10.6821 7.50001 8.57143 9.61073 8.57143 12.2143C8.57143 14.8179 10.6821 16.9286 13.2857 16.9286C15.8893 16.9286 18 14.8179 18 12.2143C18 9.61073 15.8893 7.50001 13.2857 7.50001ZM15.4286 13.0714H12.8571C12.6206 13.0714 12.4286 12.8794 12.4286 12.6429V9.64287C12.4286 9.4063 12.6206 9.2143 12.8571 9.2143C13.0937 9.2143 13.2857 9.4063 13.2857 9.64287V12.2143H15.4286C15.6651 12.2143 15.8571 12.4063 15.8571 12.6429C15.8571 12.8794 15.6651 13.0714 15.4286 13.0714Z"
                                                    fill="#8D9EB5" />
                                            </svg>
                                        </span>
                                        <span class='ba-title'>Scheduling</span>
                                    </div>
                                    <div class='ba-content ba-jc-fs'>
                                        <span class='ba-data'>75</span>
                                    </div>
                                    <div class='ba-bottom'>
                                        <span class=''>
                                            last 7 days
                                            <span class=" ba-icon"><svg xmlns="http://www.w3.org/2000/svg" width="18"
                                                    height="18" viewBox="0 0 18 18" fill="none">
                                                    <g clip-path="url(#clip0_322_3860)">
                                                        <path
                                                            d="M12 4.5L13.7175 6.2175L10.0575 9.8775L7.0575 6.8775L1.5 12.4425L2.5575 13.5L7.0575 9L10.0575 12L14.7825 7.2825L16.5 9V4.5H12Z"
                                                            fill="#01D4B9" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_322_3860">
                                                            <rect width="18" height="18" fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg></span>
                                            <b class='ba-green'>16%</b>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class='ba-card ba-w-100 '>
                            <div class='ba-top'>
                                <span class='ba-title'>Campaigns</span>
                                <div class='ba-box-items ba-flex ba-gp-1'>
                                    <div class='ba-box-search-input ba-w-50'>
                                        <input type='search' class='ba-input' placeholder='Search...' />
                                        <button class='ba-button'>
                                            <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16'
                                                fill='currentColor' class='bi bi-search' viewBox='0 0 16 16'>
                                                <path
                                                    d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
                                            </svg>
                                        </button>
                                    </div>
                                    <button class='ba-btn ba-md ba-blue'>
                                        + Add Campaign
                                    </button>
                                </div>
                            </div>
                            <div class='ba-content ba-flex ba-w-100'>
                                <table class='ba-table ba-md ba-lines ba-w-100'>
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Subscribers</th>
                                            <th>Scheduling</th>
                                            <th> </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class='ba-double'>
                                                <div class='ba-title'>Campaign 001</div>
                                                <div class='ba-subtitle'>campaign.com</div>
                                            </td>
                                            <td>25</td>
                                            <td>25</td>
                                            <td>
                                                <div class="ba-content ba-jc-fe ba-flex  ba-w-100  ba-gp-1">

                                                    <button ba-tooltip-position='top' ba-tooltip-title='Edit campaign'
                                                        class='ba-flutuant-link ba-btn ba-rounded ba-blue'>

                                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                                            viewBox="0 0 18 18" fill="none">
                                                            <g clip-path="url(#clip0_322_3916)">
                                                                <path
                                                                    d="M2.25 12.9375V15.75H5.0625L13.3575 7.45498L10.545 4.64248L2.25 12.9375ZM15.5325 5.27998C15.825 4.98748 15.825 4.51498 15.5325 4.22248L13.7775 2.46748C13.485 2.17498 13.0125 2.17498 12.72 2.46748L11.3475 3.83998L14.16 6.65248L15.5325 5.27998Z"
                                                                    fill="white" />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_322_3916">
                                                                    <rect width="18" height="18" fill="white" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>

                                                    </button>

                                                    <button ba-tooltip-position='top' ba-tooltip-title='Get embed code'
                                                        class='ba-flutuant-link ba-btn ba-rounded ba-color-light14'>

                                                        <svg class="svgColor" xmlns="http://www.w3.org/2000/svg" width="17"
                                                            height="11" viewBox="0 0 17 11" fill="currentColor">
                                                            <path
                                                                d="M9.34961 9.35L10.9996 11L16.4996 5.5L10.9996 0L9.34961 1.65L13.1996 5.5L9.34961 9.35Z" />
                                                            <path
                                                                d="M7.15 1.65L5.5 0L0 5.5L5.5 11L7.15 9.35L3.3 5.5L7.15 1.65Z" />
                                                        </svg>

                                                    </button>
                                                    <button ba-tooltip-position='top' ba-tooltip-title='Subscribers'
                                                        class='ba-flutuant-link ba-btn ba-rounded ba-color-light14'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                                            viewBox="0 0 18 18" fill="none">
                                                            <path
                                                                d="M7.71432 0C5.35117 0 3.4286 1.92257 3.4286 4.28571C3.4286 6.64885 5.35117 8.57142 7.71432 8.57142C10.0775 8.57142 12 6.64885 12 4.28571C12 1.92257 10.0775 0 7.71432 0ZM2.78575 10.2857C1.72246 10.2857 0.857178 11.151 0.857178 12.2143V12.5407C0.857178 13.5496 1.27696 14.5195 2.00896 15.2009C2.95996 16.0867 4.7216 17.1428 7.71432 17.1428C7.9496 17.1428 8.17455 17.1343 8.39484 17.1219C7.44427 16.1225 6.85717 14.7737 6.85717 13.2857C6.85717 12.18 7.18316 11.1523 7.73859 10.2857H2.78575Z"
                                                                fill="#8E9EB5" />
                                                            <path
                                                                d="M12.4285 8.57141C9.82498 8.57141 7.71426 10.6821 7.71426 13.2857C7.71426 15.8893 9.82498 18 12.4285 18C15.0321 18 17.1428 15.8893 17.1428 13.2857C17.1428 10.6821 15.0321 8.57141 12.4285 8.57141ZM15 11.1428C15.1096 11.1428 15.2192 11.1846 15.303 11.2684C15.4706 11.436 15.4706 11.7069 15.303 11.8744L11.8744 15.303C11.7908 15.3866 11.6811 15.4285 11.5714 15.4285C11.4617 15.4285 11.352 15.3866 11.2684 15.303L9.55411 13.5887C9.38653 13.4211 9.38653 13.1503 9.55411 12.9827C9.72168 12.8151 9.99256 12.8151 10.1601 12.9827L11.5714 14.394L14.697 11.2684C14.7807 11.1846 14.8904 11.1428 15 11.1428Z"
                                                                fill="#8E9EB5" />
                                                        </svg>
                                                    </button>
                                                    <button ba-tooltip-position='top' ba-tooltip-title='Push notification'
                                                        class='ba-flutuant-link ba-btn ba-rounded ba-color-light14'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                                            viewBox="0 0 18 18" fill="none">
                                                            <g clip-path="url(#clip0_322_3923)">
                                                                <path
                                                                    d="M1.5075 15.75L17.25 9L1.5075 2.25L1.5 7.5L12.75 9L1.5 10.5L1.5075 15.75Z"
                                                                    fill="#909CAE" />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_322_3923">
                                                                    <rect width="18" height="18" fill="white" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>

                                                    </button>
                                                    <button ba-tooltip-position='top'
                                                        ba-tooltip-title='Schedule notifications'
                                                        class='ba-flutuant-link ba-btn ba-rounded ba-color-light14'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                                            viewBox="0 0 18 18" fill="none">
                                                            <g clip-path="url(#clip0_322_3929)">
                                                                <path
                                                                    d="M9 1.5C4.875 1.5 1.5 4.875 1.5 9C1.5 13.125 4.875 16.5 9 16.5C13.125 16.5 16.5 13.125 16.5 9C16.5 4.875 13.125 1.5 9 1.5ZM11.6625 11.85L8.6025 9.9675C8.3775 9.8325 8.2425 9.5925 8.2425 9.33V5.8125C8.25 5.505 8.505 5.25 8.8125 5.25C9.12 5.25 9.375 5.505 9.375 5.8125V9.15L12.255 10.8825C12.525 11.0475 12.615 11.4 12.45 11.67C12.285 11.9325 11.9325 12.015 11.6625 11.85Z"
                                                                    fill="#8E9EB5" />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_322_3929">
                                                                    <rect width="18" height="18" fill="white" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                    </button>
                                                    <button ba-tooltip-position='top' ba-tooltip-title='Delete campaign'
                                                        class=' trash ba-flutuant-link ba-btn ba-rounded ba-color-light14'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25"
                                                            viewBox="0 0 24 25" fill="none">
                                                            <g clip-path="url(#clip0_322_3937)">
                                                                <path
                                                                    d="M6 19.5C6 20.6 6.9 21.5 8 21.5H16C17.1 21.5 18 20.6 18 19.5V7.5H6V19.5ZM19 4.5H15.5L14.5 3.5H9.5L8.5 4.5H5V6.5H19V4.5Z"
                                                                    fill="#8E9EB5" />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_322_3937">
                                                                    <rect width="24" height="24" fill="white"
                                                                        transform="translate(0 0.5)" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class='ba-double'>
                                                <div class='ba-title'>Campaign 002</div>
                                                <div class='ba-subtitle'>campaign.com</div>
                                            </td>
                                            <td>25</td>
                                            <td>25</td>
                                            <td>
                                                <div class="ba-content ba-flex ba-jc-fe ba-w-100 ba-gp-1">
                                                    <button ba-tooltip-position='top' ba-tooltip-title='Edit campaign'
                                                        class='ba-flutuant-link ba-btn ba-rounded ba-color-light14'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                                            viewBox="0 0 18 18" fill="none">
                                                            <g clip-path="url(#clip0_322_3956)">
                                                                <path
                                                                    d="M2.25 12.9375V15.75H5.0625L13.3575 7.45498L10.545 4.64248L2.25 12.9375ZM15.5325 5.27998C15.825 4.98748 15.825 4.51498 15.5325 4.22248L13.7775 2.46748C13.485 2.17498 13.0125 2.17498 12.72 2.46748L11.3475 3.83998L14.16 6.65248L15.5325 5.27998Z"
                                                                    fill="#909CAE" />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_322_3956">
                                                                    <rect width="18" height="18" fill="white" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>

                                                    </button>
                                                    <button ba-tooltip-position='top' ba-tooltip-title='Get embed code'
                                                        class='ba-flutuant-link ba-btn ba-rounded ba-blue'>

                                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="11"
                                                            viewBox="0 0 17 11" fill="none">
                                                            <path
                                                                d="M9.34961 9.35L10.9996 11L16.4996 5.5L10.9996 0L9.34961 1.65L13.1996 5.5L9.34961 9.35Z"
                                                                fill="#FFFFFF" />
                                                            <path
                                                                d="M7.15 1.65L5.5 0L0 5.5L5.5 11L7.15 9.35L3.3 5.5L7.15 1.65Z"
                                                                fill="#FFFFFF" />
                                                        </svg>

                                                    </button>
                                                    <button ba-tooltip-position='top' ba-tooltip-title='Subscribers'
                                                        class='ba-flutuant-link ba-btn ba-rounded ba-color-light14'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                                            viewBox="0 0 18 18" fill="none">
                                                            <path
                                                                d="M7.71432 0C5.35117 0 3.4286 1.92257 3.4286 4.28571C3.4286 6.64885 5.35117 8.57142 7.71432 8.57142C10.0775 8.57142 12 6.64885 12 4.28571C12 1.92257 10.0775 0 7.71432 0ZM2.78575 10.2857C1.72246 10.2857 0.857178 11.151 0.857178 12.2143V12.5407C0.857178 13.5496 1.27696 14.5195 2.00896 15.2009C2.95996 16.0867 4.7216 17.1428 7.71432 17.1428C7.9496 17.1428 8.17455 17.1343 8.39484 17.1219C7.44427 16.1225 6.85717 14.7737 6.85717 13.2857C6.85717 12.18 7.18316 11.1523 7.73859 10.2857H2.78575Z"
                                                                fill="#8E9EB5" />
                                                            <path
                                                                d="M12.4285 8.57141C9.82498 8.57141 7.71426 10.6821 7.71426 13.2857C7.71426 15.8893 9.82498 18 12.4285 18C15.0321 18 17.1428 15.8893 17.1428 13.2857C17.1428 10.6821 15.0321 8.57141 12.4285 8.57141ZM15 11.1428C15.1096 11.1428 15.2192 11.1846 15.303 11.2684C15.4706 11.436 15.4706 11.7069 15.303 11.8744L11.8744 15.303C11.7908 15.3866 11.6811 15.4285 11.5714 15.4285C11.4617 15.4285 11.352 15.3866 11.2684 15.303L9.55411 13.5887C9.38653 13.4211 9.38653 13.1503 9.55411 12.9827C9.72168 12.8151 9.99256 12.8151 10.1601 12.9827L11.5714 14.394L14.697 11.2684C14.7807 11.1846 14.8904 11.1428 15 11.1428Z"
                                                                fill="#8E9EB5" />
                                                        </svg>
                                                    </button>
                                                    <button ba-tooltip-position='top' ba-tooltip-title='Push notification'
                                                        class='ba-flutuant-link ba-btn ba-rounded ba-color-light14'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                                            viewBox="0 0 18 18" fill="none">
                                                            <g clip-path="url(#clip0_322_3923)">
                                                                <path
                                                                    d="M1.5075 15.75L17.25 9L1.5075 2.25L1.5 7.5L12.75 9L1.5 10.5L1.5075 15.75Z"
                                                                    fill="#909CAE" />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_322_3923">
                                                                    <rect width="18" height="18" fill="white" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>

                                                    </button>
                                                    <button ba-tooltip-position='top'
                                                        ba-tooltip-title='Schedule notifications'
                                                        class='ba-flutuant-link ba-btn ba-rounded ba-color-light14'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                                            viewBox="0 0 18 18" fill="none">
                                                            <g clip-path="url(#clip0_322_3929)">
                                                                <path
                                                                    d="M9 1.5C4.875 1.5 1.5 4.875 1.5 9C1.5 13.125 4.875 16.5 9 16.5C13.125 16.5 16.5 13.125 16.5 9C16.5 4.875 13.125 1.5 9 1.5ZM11.6625 11.85L8.6025 9.9675C8.3775 9.8325 8.2425 9.5925 8.2425 9.33V5.8125C8.25 5.505 8.505 5.25 8.8125 5.25C9.12 5.25 9.375 5.505 9.375 5.8125V9.15L12.255 10.8825C12.525 11.0475 12.615 11.4 12.45 11.67C12.285 11.9325 11.9325 12.015 11.6625 11.85Z"
                                                                    fill="#8E9EB5" />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_322_3929">
                                                                    <rect width="18" height="18" fill="white" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                    </button>
                                                    <button ba-tooltip-position='top' ba-tooltip-title='Delete campaign'
                                                        class='trash ba-flutuant-link ba-btn ba-rounded ba-color-light14'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25"
                                                            viewBox="0 0 24 25" fill="none">
                                                            <g clip-path="url(#clip0_322_3937)">
                                                                <path
                                                                    d="M6 19.5C6 20.6 6.9 21.5 8 21.5H16C17.1 21.5 18 20.6 18 19.5V7.5H6V19.5ZM19 4.5H15.5L14.5 3.5H9.5L8.5 4.5H5V6.5H19V4.5Z"
                                                                    fill="#8E9EB5" />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_322_3937">
                                                                    <rect width="24" height="24" fill="white"
                                                                        transform="translate(0 0.5)" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class='ba-double'>
                                                <div class='ba-title'>Campaign 003</div>
                                                <div class='ba-subtitle'>campaign.com</div>
                                            </td>
                                            <td>25</td>
                                            <td>25</td>
                                            <td>
                                                <div class="ba-content ba-flex ba-jc-fe ba-w-100 ba-gp-1">
                                                    <button ba-tooltip-position='top' ba-tooltip-title='Edit campaign'
                                                        class='ba-flutuant-link ba-btn ba-rounded ba-color-light14'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                                            viewBox="0 0 18 18" fill="none">
                                                            <g clip-path="url(#clip0_322_3956)">
                                                                <path
                                                                    d="M2.25 12.9375V15.75H5.0625L13.3575 7.45498L10.545 4.64248L2.25 12.9375ZM15.5325 5.27998C15.825 4.98748 15.825 4.51498 15.5325 4.22248L13.7775 2.46748C13.485 2.17498 13.0125 2.17498 12.72 2.46748L11.3475 3.83998L14.16 6.65248L15.5325 5.27998Z"
                                                                    fill="#909CAE" />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_322_3956">
                                                                    <rect width="18" height="18" fill="white" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>

                                                    </button>
                                                    <button ba-tooltip-position='top' ba-tooltip-title='Get embed code'
                                                        class='ba-flutuant-link ba-btn ba-rounded ba-color-light14'>

                                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="11"
                                                            viewBox="0 0 17 11" fill="none">
                                                            <path
                                                                d="M9.34961 9.35L10.9996 11L16.4996 5.5L10.9996 0L9.34961 1.65L13.1996 5.5L9.34961 9.35Z"
                                                                fill="#909CAE" />
                                                            <path
                                                                d="M7.15 1.65L5.5 0L0 5.5L5.5 11L7.15 9.35L3.3 5.5L7.15 1.65Z"
                                                                fill="#909CAE" />
                                                        </svg>

                                                    </button>
                                                    <button ba-tooltip-position='top' ba-tooltip-title='Subscribers'
                                                        class='ba-flutuant-link ba-btn ba-rounded ba-blue'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                                            viewBox="0 0 18 18" fill="none">
                                                            <path
                                                                d="M7.71432 0C5.35117 0 3.4286 1.92257 3.4286 4.28571C3.4286 6.64885 5.35117 8.57142 7.71432 8.57142C10.0775 8.57142 12 6.64885 12 4.28571C12 1.92257 10.0775 0 7.71432 0ZM2.78575 10.2857C1.72246 10.2857 0.857178 11.151 0.857178 12.2143V12.5407C0.857178 13.5496 1.27696 14.5195 2.00896 15.2009C2.95996 16.0867 4.7216 17.1428 7.71432 17.1428C7.9496 17.1428 8.17455 17.1343 8.39484 17.1219C7.44427 16.1225 6.85717 14.7737 6.85717 13.2857C6.85717 12.18 7.18316 11.1523 7.73859 10.2857H2.78575Z"
                                                                fill="#FFFFFF" />
                                                            <path
                                                                d="M12.4285 8.57141C9.82498 8.57141 7.71426 10.6821 7.71426 13.2857C7.71426 15.8893 9.82498 18 12.4285 18C15.0321 18 17.1428 15.8893 17.1428 13.2857C17.1428 10.6821 15.0321 8.57141 12.4285 8.57141ZM15 11.1428C15.1096 11.1428 15.2192 11.1846 15.303 11.2684C15.4706 11.436 15.4706 11.7069 15.303 11.8744L11.8744 15.303C11.7908 15.3866 11.6811 15.4285 11.5714 15.4285C11.4617 15.4285 11.352 15.3866 11.2684 15.303L9.55411 13.5887C9.38653 13.4211 9.38653 13.1503 9.55411 12.9827C9.72168 12.8151 9.99256 12.8151 10.1601 12.9827L11.5714 14.394L14.697 11.2684C14.7807 11.1846 14.8904 11.1428 15 11.1428Z"
                                                                fill="#FFFFFF" />
                                                        </svg>
                                                    </button>
                                                    <button ba-tooltip-position='top' ba-tooltip-title='Push notification'
                                                        class='ba-flutuant-link ba-btn ba-rounded ba-color-light14'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                                            viewBox="0 0 18 18" fill="none">
                                                            <g clip-path="url(#clip0_322_3923)">
                                                                <path
                                                                    d="M1.5075 15.75L17.25 9L1.5075 2.25L1.5 7.5L12.75 9L1.5 10.5L1.5075 15.75Z"
                                                                    fill="#909CAE" />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_322_3923">
                                                                    <rect width="18" height="18" fill="white" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>

                                                    </button>
                                                    <button ba-tooltip-position='top'
                                                        ba-tooltip-title='Schedule notifications'
                                                        class='ba-flutuant-link ba-btn ba-rounded ba-color-light14'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                                            viewBox="0 0 18 18" fill="none">
                                                            <g clip-path="url(#clip0_322_3929)">
                                                                <path
                                                                    d="M9 1.5C4.875 1.5 1.5 4.875 1.5 9C1.5 13.125 4.875 16.5 9 16.5C13.125 16.5 16.5 13.125 16.5 9C16.5 4.875 13.125 1.5 9 1.5ZM11.6625 11.85L8.6025 9.9675C8.3775 9.8325 8.2425 9.5925 8.2425 9.33V5.8125C8.25 5.505 8.505 5.25 8.8125 5.25C9.12 5.25 9.375 5.505 9.375 5.8125V9.15L12.255 10.8825C12.525 11.0475 12.615 11.4 12.45 11.67C12.285 11.9325 11.9325 12.015 11.6625 11.85Z"
                                                                    fill="#8E9EB5" />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_322_3929">
                                                                    <rect width="18" height="18" fill="white" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                    </button>
                                                    <button ba-tooltip-position='top' ba-tooltip-title='Delete campaign'
                                                        class='trash ba-flutuant-link ba-btn ba-rounded ba-color-light14'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25"
                                                            viewBox="0 0 24 25" fill="none">
                                                            <g clip-path="url(#clip0_322_3937)">
                                                                <path
                                                                    d="M6 19.5C6 20.6 6.9 21.5 8 21.5H16C17.1 21.5 18 20.6 18 19.5V7.5H6V19.5ZM19 4.5H15.5L14.5 3.5H9.5L8.5 4.5H5V6.5H19V4.5Z"
                                                                    fill="#8E9EB5" />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_322_3937">
                                                                    <rect width="24" height="24" fill="white"
                                                                        transform="translate(0 0.5)" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class='ba-double'>
                                                <div class='ba-title'>Campaign 004</div>
                                                <div class='ba-subtitle'>campaign.com</div>
                                            </td>
                                            <td>25</td>
                                            <td>25</td>
                                            <td>
                                                <div class="ba-content ba-flex ba-jc-fe ba-w-100 ba-gp-1">
                                                    <button ba-tooltip-position='top' ba-tooltip-title='Edit campaign'
                                                        class='ba-flutuant-link ba-btn ba-rounded ba-color-light14'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                                            viewBox="0 0 18 18" fill="none">
                                                            <g clip-path="url(#clip0_322_3956)">
                                                                <path
                                                                    d="M2.25 12.9375V15.75H5.0625L13.3575 7.45498L10.545 4.64248L2.25 12.9375ZM15.5325 5.27998C15.825 4.98748 15.825 4.51498 15.5325 4.22248L13.7775 2.46748C13.485 2.17498 13.0125 2.17498 12.72 2.46748L11.3475 3.83998L14.16 6.65248L15.5325 5.27998Z"
                                                                    fill="#909CAE" />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_322_3956">
                                                                    <rect width="18" height="18" fill="white" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>

                                                    </button>
                                                    <button ba-tooltip-position='top' ba-tooltip-title='Get embed code'
                                                        class='ba-flutuant-link ba-btn ba-rounded ba-color-light14'>

                                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="11"
                                                            viewBox="0 0 17 11" fill="none">
                                                            <path
                                                                d="M9.34961 9.35L10.9996 11L16.4996 5.5L10.9996 0L9.34961 1.65L13.1996 5.5L9.34961 9.35Z"
                                                                fill="#909CAE" />
                                                            <path
                                                                d="M7.15 1.65L5.5 0L0 5.5L5.5 11L7.15 9.35L3.3 5.5L7.15 1.65Z"
                                                                fill="#909CAE" />
                                                        </svg>

                                                    </button>
                                                    <button ba-tooltip-position='top' ba-tooltip-title='Subscribers'
                                                        class='ba-flutuant-link ba-btn ba-rounded ba-color-light14'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                                            viewBox="0 0 18 18" fill="none">
                                                            <path
                                                                d="M7.71432 0C5.35117 0 3.4286 1.92257 3.4286 4.28571C3.4286 6.64885 5.35117 8.57142 7.71432 8.57142C10.0775 8.57142 12 6.64885 12 4.28571C12 1.92257 10.0775 0 7.71432 0ZM2.78575 10.2857C1.72246 10.2857 0.857178 11.151 0.857178 12.2143V12.5407C0.857178 13.5496 1.27696 14.5195 2.00896 15.2009C2.95996 16.0867 4.7216 17.1428 7.71432 17.1428C7.9496 17.1428 8.17455 17.1343 8.39484 17.1219C7.44427 16.1225 6.85717 14.7737 6.85717 13.2857C6.85717 12.18 7.18316 11.1523 7.73859 10.2857H2.78575Z"
                                                                fill="#8E9EB5" />
                                                            <path
                                                                d="M12.4285 8.57141C9.82498 8.57141 7.71426 10.6821 7.71426 13.2857C7.71426 15.8893 9.82498 18 12.4285 18C15.0321 18 17.1428 15.8893 17.1428 13.2857C17.1428 10.6821 15.0321 8.57141 12.4285 8.57141ZM15 11.1428C15.1096 11.1428 15.2192 11.1846 15.303 11.2684C15.4706 11.436 15.4706 11.7069 15.303 11.8744L11.8744 15.303C11.7908 15.3866 11.6811 15.4285 11.5714 15.4285C11.4617 15.4285 11.352 15.3866 11.2684 15.303L9.55411 13.5887C9.38653 13.4211 9.38653 13.1503 9.55411 12.9827C9.72168 12.8151 9.99256 12.8151 10.1601 12.9827L11.5714 14.394L14.697 11.2684C14.7807 11.1846 14.8904 11.1428 15 11.1428Z"
                                                                fill="#8E9EB5" />
                                                        </svg>
                                                    </button>
                                                    <button ba-tooltip-position='top' ba-tooltip-title='Push notification'
                                                        class='ba-flutuant-link ba-btn ba-rounded ba-blue'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                                            viewBox="0 0 18 18" fill="none">
                                                            <g clip-path="url(#clip0_322_3923)">
                                                                <path
                                                                    d="M1.5075 15.75L17.25 9L1.5075 2.25L1.5 7.5L12.75 9L1.5 10.5L1.5075 15.75Z"
                                                                    fill="#FFFFFF" />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_322_3923">
                                                                    <rect width="18" height="18" fill="white" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>

                                                    </button>
                                                    <button ba-tooltip-position='top'
                                                        ba-tooltip-title='Schedule notifications'
                                                        class='ba-flutuant-link ba-btn ba-rounded ba-color-light14'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                                            viewBox="0 0 18 18" fill="none">
                                                            <g clip-path="url(#clip0_322_3929)">
                                                                <path
                                                                    d="M9 1.5C4.875 1.5 1.5 4.875 1.5 9C1.5 13.125 4.875 16.5 9 16.5C13.125 16.5 16.5 13.125 16.5 9C16.5 4.875 13.125 1.5 9 1.5ZM11.6625 11.85L8.6025 9.9675C8.3775 9.8325 8.2425 9.5925 8.2425 9.33V5.8125C8.25 5.505 8.505 5.25 8.8125 5.25C9.12 5.25 9.375 5.505 9.375 5.8125V9.15L12.255 10.8825C12.525 11.0475 12.615 11.4 12.45 11.67C12.285 11.9325 11.9325 12.015 11.6625 11.85Z"
                                                                    fill="#8E9EB5" />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_322_3929">
                                                                    <rect width="18" height="18" fill="white" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                    </button>
                                                    <button ba-tooltip-position='top' ba-tooltip-title='Delete campaign'
                                                        class='trash ba-flutuant-link ba-btn ba-rounded ba-color-light14'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25"
                                                            viewBox="0 0 24 25" fill="none">
                                                            <g clip-path="url(#clip0_322_3937)">
                                                                <path
                                                                    d="M6 19.5C6 20.6 6.9 21.5 8 21.5H16C17.1 21.5 18 20.6 18 19.5V7.5H6V19.5ZM19 4.5H15.5L14.5 3.5H9.5L8.5 4.5H5V6.5H19V4.5Z"
                                                                    fill="#8E9EB5" />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_322_3937">
                                                                    <rect width="24" height="24" fill="white"
                                                                        transform="translate(0 0.5)" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class='ba-double'>
                                                <div class='ba-title'>Campaign 005</div>
                                                <div class='ba-subtitle'>campaign.com</div>
                                            </td>
                                            <td>25</td>
                                            <td>25</td>
                                            <td>
                                                <div class="ba-content ba-flex ba-jc-fe ba-w-100 ba-gp-1">
                                                    <button ba-tooltip-position='top' ba-tooltip-title='Edit campaign'
                                                        class='ba-flutuant-link ba-btn ba-rounded ba-color-light14'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                                            viewBox="0 0 18 18" fill="none">
                                                            <g clip-path="url(#clip0_322_3956)">
                                                                <path
                                                                    d="M2.25 12.9375V15.75H5.0625L13.3575 7.45498L10.545 4.64248L2.25 12.9375ZM15.5325 5.27998C15.825 4.98748 15.825 4.51498 15.5325 4.22248L13.7775 2.46748C13.485 2.17498 13.0125 2.17498 12.72 2.46748L11.3475 3.83998L14.16 6.65248L15.5325 5.27998Z"
                                                                    fill="#909CAE" />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_322_3956">
                                                                    <rect width="18" height="18" fill="white" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>

                                                    </button>
                                                    <button ba-tooltip-position='top' ba-tooltip-title='Get embed code'
                                                        class='ba-flutuant-link ba-btn ba-rounded ba-color-light14'>

                                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="11"
                                                            viewBox="0 0 17 11" fill="none">
                                                            <path
                                                                d="M9.34961 9.35L10.9996 11L16.4996 5.5L10.9996 0L9.34961 1.65L13.1996 5.5L9.34961 9.35Z"
                                                                fill="#909CAE" />
                                                            <path
                                                                d="M7.15 1.65L5.5 0L0 5.5L5.5 11L7.15 9.35L3.3 5.5L7.15 1.65Z"
                                                                fill="#909CAE" />
                                                        </svg>

                                                    </button>
                                                    <button ba-tooltip-position='top' ba-tooltip-title='Subscribers'
                                                        class='ba-flutuant-link ba-btn ba-rounded ba-color-light14'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                                            viewBox="0 0 18 18" fill="none">
                                                            <path
                                                                d="M7.71432 0C5.35117 0 3.4286 1.92257 3.4286 4.28571C3.4286 6.64885 5.35117 8.57142 7.71432 8.57142C10.0775 8.57142 12 6.64885 12 4.28571C12 1.92257 10.0775 0 7.71432 0ZM2.78575 10.2857C1.72246 10.2857 0.857178 11.151 0.857178 12.2143V12.5407C0.857178 13.5496 1.27696 14.5195 2.00896 15.2009C2.95996 16.0867 4.7216 17.1428 7.71432 17.1428C7.9496 17.1428 8.17455 17.1343 8.39484 17.1219C7.44427 16.1225 6.85717 14.7737 6.85717 13.2857C6.85717 12.18 7.18316 11.1523 7.73859 10.2857H2.78575Z"
                                                                fill="#8E9EB5" />
                                                            <path
                                                                d="M12.4285 8.57141C9.82498 8.57141 7.71426 10.6821 7.71426 13.2857C7.71426 15.8893 9.82498 18 12.4285 18C15.0321 18 17.1428 15.8893 17.1428 13.2857C17.1428 10.6821 15.0321 8.57141 12.4285 8.57141ZM15 11.1428C15.1096 11.1428 15.2192 11.1846 15.303 11.2684C15.4706 11.436 15.4706 11.7069 15.303 11.8744L11.8744 15.303C11.7908 15.3866 11.6811 15.4285 11.5714 15.4285C11.4617 15.4285 11.352 15.3866 11.2684 15.303L9.55411 13.5887C9.38653 13.4211 9.38653 13.1503 9.55411 12.9827C9.72168 12.8151 9.99256 12.8151 10.1601 12.9827L11.5714 14.394L14.697 11.2684C14.7807 11.1846 14.8904 11.1428 15 11.1428Z"
                                                                fill="#8E9EB5" />
                                                        </svg>
                                                    </button>
                                                    <button ba-tooltip-position='top' ba-tooltip-title='Push notification'
                                                        class='ba-flutuant-link ba-btn ba-rounded ba-color-light14'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                                            viewBox="0 0 18 18" fill="none">
                                                            <g clip-path="url(#clip0_322_3923)">
                                                                <path
                                                                    d="M1.5075 15.75L17.25 9L1.5075 2.25L1.5 7.5L12.75 9L1.5 10.5L1.5075 15.75Z"
                                                                    fill="#909CAE" />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_322_3923">
                                                                    <rect width="18" height="18" fill="white" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>

                                                    </button>
                                                    <button ba-tooltip-position='top'
                                                        ba-tooltip-title='Schedule notifications'
                                                        class='ba-flutuant-link ba-btn ba-rounded ba-blue'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                                            viewBox="0 0 18 18" fill="none">
                                                            <g clip-path="url(#clip0_322_3929)">
                                                                <path
                                                                    d="M9 1.5C4.875 1.5 1.5 4.875 1.5 9C1.5 13.125 4.875 16.5 9 16.5C13.125 16.5 16.5 13.125 16.5 9C16.5 4.875 13.125 1.5 9 1.5ZM11.6625 11.85L8.6025 9.9675C8.3775 9.8325 8.2425 9.5925 8.2425 9.33V5.8125C8.25 5.505 8.505 5.25 8.8125 5.25C9.12 5.25 9.375 5.505 9.375 5.8125V9.15L12.255 10.8825C12.525 11.0475 12.615 11.4 12.45 11.67C12.285 11.9325 11.9325 12.015 11.6625 11.85Z"
                                                                    fill="#FFFFFF" />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_322_3929">
                                                                    <rect width="18" height="18" fill="white" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                    </button>
                                                    <button ba-tooltip-position='top' ba-tooltip-title='Delete campaign'
                                                        class='trash ba-flutuant-link ba-btn ba-rounded ba-color-light14'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25"
                                                            viewBox="0 0 24 25" fill="none">
                                                            <g clip-path="url(#clip0_322_3937)">
                                                                <path
                                                                    d="M6 19.5C6 20.6 6.9 21.5 8 21.5H16C17.1 21.5 18 20.6 18 19.5V7.5H6V19.5ZM19 4.5H15.5L14.5 3.5H9.5L8.5 4.5H5V6.5H19V4.5Z"
                                                                    fill="#8E9EB5" />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_322_3937">
                                                                    <rect width="24" height="24" fill="white"
                                                                        transform="translate(0 0.5)" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class='ba-double'>
                                                <div class='ba-title'>Campaign 005</div>
                                                <div class='ba-subtitle'>campaign.com</div>
                                            </td>
                                            <td>25</td>
                                            <td>25</td>
                                            <td>
                                                <div class="ba-content ba-flex ba-jc-fe ba-w-100 ba-gp-1">
                                                    <button ba-tooltip-position='top' ba-tooltip-title='Edit campaign'
                                                        class='ba-flutuant-link ba-btn ba-rounded ba-color-light14'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                                            viewBox="0 0 18 18" fill="none">
                                                            <g clip-path="url(#clip0_322_3956)">
                                                                <path
                                                                    d="M2.25 12.9375V15.75H5.0625L13.3575 7.45498L10.545 4.64248L2.25 12.9375ZM15.5325 5.27998C15.825 4.98748 15.825 4.51498 15.5325 4.22248L13.7775 2.46748C13.485 2.17498 13.0125 2.17498 12.72 2.46748L11.3475 3.83998L14.16 6.65248L15.5325 5.27998Z"
                                                                    fill="#909CAE" />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_322_3956">
                                                                    <rect width="18" height="18" fill="white" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>

                                                    </button>
                                                    <button ba-tooltip-position='top' ba-tooltip-title='Get embed code'
                                                        class='ba-flutuant-link ba-btn ba-rounded ba-color-light14'>

                                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="11"
                                                            viewBox="0 0 17 11" fill="none">
                                                            <path
                                                                d="M9.34961 9.35L10.9996 11L16.4996 5.5L10.9996 0L9.34961 1.65L13.1996 5.5L9.34961 9.35Z"
                                                                fill="#909CAE" />
                                                            <path
                                                                d="M7.15 1.65L5.5 0L0 5.5L5.5 11L7.15 9.35L3.3 5.5L7.15 1.65Z"
                                                                fill="#909CAE" />
                                                        </svg>

                                                    </button>
                                                    <button ba-tooltip-position='top' ba-tooltip-title='Subscribers'
                                                        class='ba-flutuant-link ba-btn ba-rounded ba-color-light14'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                                            viewBox="0 0 18 18" fill="none">
                                                            <path
                                                                d="M7.71432 0C5.35117 0 3.4286 1.92257 3.4286 4.28571C3.4286 6.64885 5.35117 8.57142 7.71432 8.57142C10.0775 8.57142 12 6.64885 12 4.28571C12 1.92257 10.0775 0 7.71432 0ZM2.78575 10.2857C1.72246 10.2857 0.857178 11.151 0.857178 12.2143V12.5407C0.857178 13.5496 1.27696 14.5195 2.00896 15.2009C2.95996 16.0867 4.7216 17.1428 7.71432 17.1428C7.9496 17.1428 8.17455 17.1343 8.39484 17.1219C7.44427 16.1225 6.85717 14.7737 6.85717 13.2857C6.85717 12.18 7.18316 11.1523 7.73859 10.2857H2.78575Z"
                                                                fill="#8E9EB5" />
                                                            <path
                                                                d="M12.4285 8.57141C9.82498 8.57141 7.71426 10.6821 7.71426 13.2857C7.71426 15.8893 9.82498 18 12.4285 18C15.0321 18 17.1428 15.8893 17.1428 13.2857C17.1428 10.6821 15.0321 8.57141 12.4285 8.57141ZM15 11.1428C15.1096 11.1428 15.2192 11.1846 15.303 11.2684C15.4706 11.436 15.4706 11.7069 15.303 11.8744L11.8744 15.303C11.7908 15.3866 11.6811 15.4285 11.5714 15.4285C11.4617 15.4285 11.352 15.3866 11.2684 15.303L9.55411 13.5887C9.38653 13.4211 9.38653 13.1503 9.55411 12.9827C9.72168 12.8151 9.99256 12.8151 10.1601 12.9827L11.5714 14.394L14.697 11.2684C14.7807 11.1846 14.8904 11.1428 15 11.1428Z"
                                                                fill="#8E9EB5" />
                                                        </svg>
                                                    </button>
                                                    <button ba-tooltip-position='top' ba-tooltip-title='Push notification'
                                                        class='ba-flutuant-link ba-btn ba-rounded ba-color-light14'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                                            viewBox="0 0 18 18" fill="none">
                                                            <g clip-path="url(#clip0_322_3923)">
                                                                <path
                                                                    d="M1.5075 15.75L17.25 9L1.5075 2.25L1.5 7.5L12.75 9L1.5 10.5L1.5075 15.75Z"
                                                                    fill="#909CAE" />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_322_3923">
                                                                    <rect width="18" height="18" fill="white" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>

                                                    </button>
                                                    <button ba-tooltip-position='top'
                                                        ba-tooltip-title='Schedule notifications'
                                                        class='ba-flutuant-link ba-btn ba-rounded ba-color-light14'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                                            viewBox="0 0 18 18" fill="none">
                                                            <g clip-path="url(#clip0_322_3929)">
                                                                <path
                                                                    d="M9 1.5C4.875 1.5 1.5 4.875 1.5 9C1.5 13.125 4.875 16.5 9 16.5C13.125 16.5 16.5 13.125 16.5 9C16.5 4.875 13.125 1.5 9 1.5ZM11.6625 11.85L8.6025 9.9675C8.3775 9.8325 8.2425 9.5925 8.2425 9.33V5.8125C8.25 5.505 8.505 5.25 8.8125 5.25C9.12 5.25 9.375 5.505 9.375 5.8125V9.15L12.255 10.8825C12.525 11.0475 12.615 11.4 12.45 11.67C12.285 11.9325 11.9325 12.015 11.6625 11.85Z"
                                                                    fill="#8E9EB5" />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_322_3929">
                                                                    <rect width="18" height="18" fill="white" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                    </button>
                                                    <button ba-tooltip-position='top' ba-tooltip-title='Delete campaign'
                                                        class=' trash ba-flutuant-link ba-btn ba-rounded'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25"
                                                            viewBox="0 0 24 25" fill="none">
                                                            <g clip-path="url(#clip0_322_3937)">
                                                                <path
                                                                    d="M6 19.5C6 20.6 6.9 21.5 8 21.5H16C17.1 21.5 18 20.6 18 19.5V7.5H6V19.5ZM19 4.5H15.5L14.5 3.5H9.5L8.5 4.5H5V6.5H19V4.5Z"
                                                                    fill="#FF3636" />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_322_3937">
                                                                    <rect width="24" height="24" fill="white"
                                                                        transform="translate(0 0.5)" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class='ba-flex ba-jc-center ba-pd-b-1'>
                        <footer class='ba-footer'>
                            <nav class='ba-nav'>
                                <span class='ba-link'>© Builderall</span>
                                <hr>
                                <a href='https://office.builderall.com/us/office/terms-of-use' class='ba-link ba-blue'>Terms
                                    of Use</a>
                                <hr>
                                <a href='https://office.builderall.com/us/office/privacy-policy'
                                    class='ba-link ba-blue'>Privacy policy</a>
                                <hr>
                                <a href='https://office.builderall.com/us/office/franchise-system'
                                    class='ba-link ba-blue'>Affiliates</a>
                                <hr>
                                <a href='https://office.builderall.com/us/office/support/ticket' class='ba-link'>Support</a>
                            </nav>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    </body>
</template>
    
<script>

export default {

    data() {
        baIsActive: 'ba-is-active'
    }

}



</script>
    
<style>.ba-btn:hover .svgColor {
    fill: white;
}

.ba-btn:hover {
    background-color: #0072E1;

}

.trash:hover {
    background-color: rgba(255, 54, 54, 0.20);
    ;
}

.svgColor {
    fill: #909CAE;
}

.svgColor:hover {
    fill: white;
}</style>