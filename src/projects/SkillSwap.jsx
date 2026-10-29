import React, { useMemo, useState } from "react";

// SkillSwap is packaged as one portable component. Styles and demo data are embedded
// so it can be imported into an existing React/Vite portfolio without extra files.
const styles = String.raw`@import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@500;600;700;800&display=swap");
.skillswap-embed {--ink: #17251d; --muted: #69756d; --line: #dfe6df; --paper: #ffffff; --canvas: #f8faf7;
  --green: #255f43; --green-2: #347a58; --green-soft: #e4f0e8; --lime: #d9ef83; --cream: #f3f0e6;
  --blue: #346584; --blue-soft: #e8f2f8; --amber: #9b681f; --amber-soft: #fbf0d5; --rose: #9a4b53;
  --shadow: 0 10px 35px rgba(29, 55, 39, .08); --radius: 16px;}
.skillswap-embed .icon {flex: none;}
.skillswap-embed .btn {border: 1px solid transparent; border-radius: 10px; min-height: 42px; padding: 0 18px; display: inline-flex; gap: 9px; align-items: center; justify-content: center; font-weight: 700; font-size: 14px; transition: .2s ease;}
.skillswap-embed .btn:hover {transform: translateY(-1px);}
.skillswap-embed .btn.primary {background: var(--green); color: white; box-shadow: 0 5px 14px rgba(37,95,67,.18);}
.skillswap-embed .btn.primary:hover {background: #1d4d36;}
.skillswap-embed .btn.secondary {background: white; border-color: var(--line); color: var(--ink); box-shadow: 0 1px 2px rgba(0,0,0,.03);}
.skillswap-embed .btn.ghost {background: transparent; color: var(--muted);}
.skillswap-embed .btn.danger {color: #a33; background: #fff0f0;}
.skillswap-embed .btn.full {width: 100%;}
.skillswap-embed .btn:disabled {opacity: .45; cursor: not-allowed; transform: none;}
.skillswap-embed .icon-btn {border: 1px solid var(--line); background: white; width: 38px; height: 38px; border-radius: 10px; display: grid; place-items: center;}
.skillswap-embed .logo {border: 0; background: transparent; padding: 0; display: flex; align-items: center; gap: 10px; font-weight: 800; font-size: 20px; letter-spacing: -.6px;}
.skillswap-embed .logo > span:last-child > span {color: var(--green-2);}
.skillswap-embed .logo-mark {width: 35px; height: 35px; color: white; background: var(--green); border-radius: 10px; display: grid; place-items: center; transform: rotate(-3deg);}
.skillswap-embed .avatar {display: grid; place-items: center; border-radius: 50%; font-weight: 800; color: #203d2e; position: relative; flex: none; border: 2px solid rgba(255,255,255,.8);}
.skillswap-embed .avatar.sm {width: 34px; height: 34px; font-size: 11px;}
.skillswap-embed .avatar.md {width: 44px; height: 44px; font-size: 13px;}
.skillswap-embed .avatar.lg {width: 58px; height: 58px; font-size: 16px;}
.skillswap-embed .avatar.xl {width: 82px; height: 82px; font-size: 22px;}
.skillswap-embed .avatar.sage {background: #c8dfce;}
.skillswap-embed .avatar.blue {background: #bcd8e8; color: #244a61;}
.skillswap-embed .avatar.rose {background: #efc8ca; color: #63353a;}
.skillswap-embed .avatar.amber {background: #ecd5a9; color: #6a4b19;}
.skillswap-embed .avatar.violet {background: #d7cced; color: #4b3e6b;}
.skillswap-embed .avatar.mint {background: #bfe4d8;}
.skillswap-embed .avatar.navy {background: #294d5b; color: white;}
.skillswap-embed .avatar .online {width: 12px; height: 12px; background: #4aa970; border: 2px solid white; border-radius: 50%; position: absolute; right: 0; bottom: 4px;}
.skillswap-embed .stars {display: inline-flex; align-items: center; gap: 4px; font-size: 13px; color: var(--muted);}
.skillswap-embed .stars svg {color: #e6a627; fill: #e6a627;}
.skillswap-embed .stars strong {color: var(--ink);}
.skillswap-embed .badge {display: inline-flex; align-items: center; gap: 5px; width: fit-content; border-radius: 999px; padding: 5px 9px; font-size: 11px; font-weight: 700; background: #eff2ef; color: #566159;}
.skillswap-embed .badge.green {background: var(--green-soft); color: var(--green);}
.skillswap-embed .badge.blue {background: var(--blue-soft); color: var(--blue);}
.skillswap-embed .badge.amber {background: var(--amber-soft); color: var(--amber);}
.skillswap-embed .badge.rose {background: #f9e4e5; color: var(--rose);}
.skillswap-embed .section-eyebrow {color: var(--green-2); font-size: 12px; text-transform: uppercase; letter-spacing: 1.6px; font-weight: 800;}
/* Public */
.skillswap-embed .public-page {background: #fbfcf8; overflow: hidden;}
.skillswap-embed .public-nav {height: 76px; max-width: 1180px; margin: auto; padding: 0 24px; display: flex; align-items: center; justify-content: space-between;}
.skillswap-embed .public-nav nav {display: flex; align-items: center; gap: 28px;}
.skillswap-embed .public-nav nav > button:not(.btn) {border: 0; background: transparent; font-size: 14px; font-weight: 600;}
.skillswap-embed .hero {min-height: 660px; max-width: 1180px; margin: auto; padding: 68px 24px 90px; display: grid; grid-template-columns: 1fr 1fr; align-items: center; gap: 64px;}
.skillswap-embed .hero-copy h1 {margin: 22px 0; font-size: clamp(48px, 6vw, 76px); line-height: 1.02; letter-spacing: -4px; max-width: 650px;}
.skillswap-embed .hero-copy h1 em {color: var(--green-2); font-style: normal; display: block;}
.skillswap-embed .hero-copy > p {color: var(--muted); max-width: 590px; font-size: 18px; line-height: 1.7;}
.skillswap-embed .hero-actions {display: flex; gap: 12px; margin: 30px 0 38px;}
.skillswap-embed .hero-actions .btn {min-height: 50px; padding: 0 22px;}
.skillswap-embed .trusted {display: flex; gap: 14px; align-items: center; font-size: 12px; color: var(--muted); line-height: 1.5;}
.skillswap-embed .trusted strong {color: var(--ink);}
.skillswap-embed .avatar-stack {display: flex;}
.skillswap-embed .avatar-stack .avatar {margin-right: -9px; box-shadow: 0 0 0 2px #fbfcf8;}
.skillswap-embed .hero-visual {height: 470px; position: relative; border-radius: 48% 52% 45% 55%; background: #e9f1e4;}
.skillswap-embed .orbit {position: absolute; border: 1px dashed #abc3ae; border-radius: 50%; inset: 8% -4%; transform: rotate(-15deg);}
.skillswap-embed .orbit-two {inset: 22% 5%; transform: rotate(24deg);}
.skillswap-embed .swap-card {position: absolute; width: 255px; background: rgba(255,255,255,.94); border: 1px solid rgba(255,255,255,.8); box-shadow: var(--shadow); border-radius: 18px; padding: 18px; z-index: 2;}
.skillswap-embed .card-a {left: -5%; top: 13%; transform: rotate(-3deg);}
.skillswap-embed .card-b {right: -2%; bottom: 12%; transform: rotate(3deg);}
.skillswap-embed .mini-person {display: flex; align-items: center; gap: 11px;}
.skillswap-embed .mini-person > div {display: flex; flex-direction: column; gap: 2px;}
.skillswap-embed .mini-person strong {font-size: 14px;}
.skillswap-embed .mini-person span {font-size: 12px; color: var(--muted); display: flex; align-items: center; gap: 5px;}
.skillswap-embed .skill-pill {margin-top: 15px; background: var(--canvas); padding: 10px; border-radius: 10px; display: flex; align-items: center; gap: 9px; font-weight: 700; font-size: 13px;}
.skillswap-embed .skill-icon,
.skillswap-embed .skill-symbol {display: grid; place-items: center; background: var(--lime); border-radius: 8px; width: 35px; height: 35px; font-weight: 800;}
.skillswap-embed .swap-center {width: 64px; height: 64px; background: var(--green); color: white; position: absolute; inset: 0; margin: auto; border-radius: 50%; display: grid; place-items: center; z-index: 3; box-shadow: 0 8px 25px rgba(37,95,67,.26);}
.skillswap-embed .floating-note {position: absolute; right: 4%; top: 9%; background: #213b2d; color: white; padding: 11px 14px; border-radius: 12px; z-index: 4; display: flex; gap: 9px; align-items: center; box-shadow: var(--shadow);}
.skillswap-embed .floating-note > svg {color: var(--lime);}
.skillswap-embed .floating-note span {display: flex; flex-direction: column; font-size: 12px;}
.skillswap-embed .floating-note small {opacity: .7; margin-top: 2px;}
.skillswap-embed .how-section {background: #193729; color: white; padding: 95px max(24px, calc((100vw - 1132px)/2));}
.skillswap-embed .how-section .section-eyebrow {color: var(--lime);}
.skillswap-embed .how-section > h2,
.skillswap-embed .skills-head h2 {font-size: 42px; line-height: 1.16; letter-spacing: -1.8px; margin: 14px 0 55px;}
.skillswap-embed .steps {display: grid; grid-template-columns: repeat(3, 1fr); gap: 50px;}
.skillswap-embed .step {position: relative; padding-top: 10px;}
.skillswap-embed .step > span {position: absolute; right: 0; top: -9px; font: 700 48px "Manrope"; color: rgba(255,255,255,.07);}
.skillswap-embed .step-icon {width: 55px; height: 55px; border-radius: 16px; background: rgba(217,239,131,.12); color: var(--lime); display: grid; place-items: center; margin-bottom: 23px;}
.skillswap-embed .step h3 {font-size: 19px; margin-bottom: 12px;}
.skillswap-embed .step p {color: #a9b9b0; line-height: 1.7; font-size: 14px; max-width: 300px;}
.skillswap-embed .skills-section {max-width: 1180px; margin: auto; padding: 100px 24px;}
.skillswap-embed .skills-head {display: flex; justify-content: space-between; align-items: end;}
.skillswap-embed .skills-head h2 {margin-bottom: 0;}
.skillswap-embed .skill-cloud {display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-top: 44px;}
.skillswap-embed .skill-tile {border: 1px solid var(--line); background: white; border-radius: 16px; text-align: left; padding: 20px; display: grid; grid-template-columns: 46px 1fr auto; grid-template-rows: 1fr 1fr; align-items: center; column-gap: 14px; transition: .2s;}
.skillswap-embed .skill-tile:hover {transform: translateY(-3px); box-shadow: var(--shadow); border-color: #b9cabd;}
.skillswap-embed .skill-tile > span {grid-row: span 2; width: 46px; height: 46px; border-radius: 12px; background: var(--green-soft); display: grid; place-items: center; font-weight: 800;}
.skillswap-embed .skill-tile strong {font: 700 15px "Manrope";}
.skillswap-embed .skill-tile small {color: var(--muted);}
.skillswap-embed .skill-tile svg {grid-column: 3; grid-row: 1 / span 2;}
.skillswap-embed .tile-1 > span {background: var(--amber-soft);}
.skillswap-embed .tile-2 > span {background: var(--blue-soft);}
.skillswap-embed .tile-3 > span {background: #eee9f7;}
.skillswap-embed .tile-4 > span {background: #f8e6e6;}
.skillswap-embed .tile-5 > span {background: #e8f1df;}
.skillswap-embed .quote-section {background: var(--cream); text-align: center; padding: 90px 24px;}
.skillswap-embed .quote-section blockquote {margin: 0 auto 28px; max-width: 850px; font: 600 29px/1.55 "Manrope"; letter-spacing: -.7px;}
.skillswap-embed .quote-section > div {display: flex; justify-content: center; gap: 11px; align-items: center;}
.skillswap-embed .quote-section > div span {display: flex; flex-direction: column; text-align: left; font-size: 13px;}
.skillswap-embed .quote-section small {color: var(--muted); margin-top: 3px;}
.skillswap-embed .cta {max-width: 1132px; margin: 80px auto; background: var(--lime); padding: 58px 64px; border-radius: 24px; display: flex; justify-content: space-between; align-items: center; gap: 30px;}
.skillswap-embed .cta h2 {max-width: 730px; font-size: 35px; line-height: 1.2; margin: 10px 0; letter-spacing: -1.2px;}
.skillswap-embed .cta p {color: #526145;}
.skillswap-embed .cta .btn {min-width: 210px; min-height: 50px;}
.skillswap-embed footer {min-height: 100px; border-top: 1px solid var(--line); display: flex; align-items: center; gap: 40px; padding: 0 max(24px, calc((100vw - 1132px)/2)); color: var(--muted); font-size: 13px;}
.skillswap-embed footer p {flex: 1;}
/* Auth */
.skillswap-embed .auth-page {min-height: 100vh; display: grid; grid-template-columns: 42% 58%; background: white;}
.skillswap-embed .auth-brand {background: #e7f0e4; padding: 38px 55px; position: relative; overflow: hidden; display: flex; flex-direction: column; justify-content: space-between;}
.skillswap-embed .auth-brand:after {content: ""; position: absolute; width: 420px; height: 420px; border: 1px solid #c1d3c1; border-radius: 50%; bottom: -180px; right: -120px; box-shadow: 0 0 0 50px rgba(255,255,255,.12), 0 0 0 100px rgba(255,255,255,.08);}
.skillswap-embed .auth-quote {max-width: 430px; margin: auto 0; position: relative; z-index: 1;}
.skillswap-embed .auth-quote > svg {color: var(--green); margin-bottom: 24px;}
.skillswap-embed .auth-quote h2 {font-size: 38px; line-height: 1.2; letter-spacing: -1.5px;}
.skillswap-embed .auth-quote > p {color: #5b6d60; line-height: 1.7; margin: 18px 0 30px;}
.skillswap-embed .auth-dots {height: 30px;}
.skillswap-embed .auth-form-wrap {position: relative; display: grid; place-items: center; padding: 60px 25px;}
.skillswap-embed .back-link {position: absolute; top: 35px; left: 45px; border: 0; background: transparent; display: flex; gap: 8px; align-items: center; color: var(--muted); font-size: 13px;}
.skillswap-embed .auth-form {width: min(430px, 100%); display: flex; flex-direction: column; gap: 18px;}
.skillswap-embed .auth-form h1 {font-size: 35px; letter-spacing: -1.2px; margin: 9px 0 6px;}
.skillswap-embed .auth-form > div > p {color: var(--muted);}
.skillswap-embed .auth-form label,
.skillswap-embed .settings-form label,
.skillswap-embed .request-form label,
.skillswap-embed .review-modal label {display: flex; flex-direction: column; gap: 8px; font-size: 13px; font-weight: 700;}
.skillswap-embed .auth-form input:not([type=checkbox]),
.skillswap-embed .auth-form select,
.skillswap-embed .settings-form input,
.skillswap-embed .settings-form select,
.skillswap-embed .settings-form textarea,
.skillswap-embed .request-form select,
.skillswap-embed .request-form textarea,
.skillswap-embed .review-modal textarea {border: 1px solid var(--line); background: white; border-radius: 9px; padding: 12px 13px; outline: none; width: 100%;}
.skillswap-embed .auth-form input:focus,
.skillswap-embed .auth-form select:focus,
.skillswap-embed textarea:focus {border-color: var(--green-2); box-shadow: 0 0 0 3px rgba(52,122,88,.1);}
.skillswap-embed .check-row {flex-direction: row !important; font-weight: 400 !important; color: var(--muted); align-items: start;}
.skillswap-embed .check-row input {accent-color: var(--green); margin-top: 3px;}
.skillswap-embed .field-row {display: grid; grid-template-columns: 1fr 1fr; gap: 14px;}
.skillswap-embed .auth-divider {height: 1px; background: var(--line); text-align: center; margin: 5px 0;}
.skillswap-embed .auth-divider span {background: white; color: var(--muted); position: relative; top: -10px; padding: 0 10px; font-size: 12px;}
.skillswap-embed .google-g {font-weight: 800; color: #4285f4;}
.skillswap-embed .switch-auth {text-align: center; color: var(--muted); font-size: 13px;}
.skillswap-embed .auth-notice {border-radius: 9px; background: var(--amber-soft); color: var(--amber); padding: 10px 12px; font-size: 12px; line-height: 1.5;}
.skillswap-embed .switch-auth button,
.skillswap-embed .text-link {border: 0; background: transparent; color: var(--green); font-weight: 700; padding: 0;}
.skillswap-embed .text-link {align-self: end; margin-top: -7px;}
/* App shell */
.skillswap-embed .app-shell {min-height: 100vh; background: var(--canvas);}
.skillswap-embed .app-shell > aside {width: 235px; height: 100vh; position: fixed; z-index: 30; background: #153428; color: white; padding: 25px 15px 18px; display: flex; flex-direction: column;}
.skillswap-embed .app-shell > aside .logo {margin: 0 9px 35px;}
.skillswap-embed .app-shell > aside .logo-mark {background: var(--lime); color: var(--green);}
.skillswap-embed .app-shell > aside .logo > span:last-child > span {color: var(--lime);}
.skillswap-embed .app-shell > aside nav,
.skillswap-embed .side-bottom {display: flex; flex-direction: column; gap: 5px;}
.skillswap-embed .app-shell > aside nav button,
.skillswap-embed .side-bottom > button {height: 43px; padding: 0 13px; border-radius: 9px; border: 0; color: #a9bbb2; background: transparent; display: flex; align-items: center; gap: 12px; font-weight: 600; font-size: 14px; text-align: left;}
.skillswap-embed .app-shell > aside nav button:hover,
.skillswap-embed .app-shell > aside nav button.active,
.skillswap-embed .side-bottom > button.active {background: rgba(255,255,255,.09); color: white;}
.skillswap-embed .nav-count {background: var(--lime); color: var(--green); font-size: 10px; width: 19px; height: 19px; border-radius: 50%; margin-left: auto; display: grid; place-items: center;}
.skillswap-embed .side-bottom {margin-top: auto;}
.skillswap-embed .side-profile {border-top: 1px solid rgba(255,255,255,.1); margin-top: 10px; padding: 17px 5px 0; display: flex; align-items: center; gap: 9px;}
.skillswap-embed .side-profile > div {display: flex; flex-direction: column; flex: 1;}
.skillswap-embed .side-profile strong {font-size: 12px;}
.skillswap-embed .side-profile span {font-size: 10px; color: #91a69c;}
.skillswap-embed .side-profile svg {color: #91a69c;}
.skillswap-embed .app-main {margin-left: 235px; min-height: 100vh;}
.skillswap-embed .app-header {height: 68px; background: rgba(255,255,255,.94); border-bottom: 1px solid var(--line); padding: 0 32px; display: flex; align-items: center; gap: 15px; position: sticky; top: 0; z-index: 20; backdrop-filter: blur(10px);}
.skillswap-embed .header-search {width: min(420px, 45vw); height: 39px; display: flex; align-items: center; gap: 10px; background: #f4f6f3; border: 1px solid #edf0ec; border-radius: 9px; padding: 0 11px;}
.skillswap-embed .header-search input {border: 0; outline: none; background: transparent; flex: 1; min-width: 0; font-size: 13px;}
.skillswap-embed .header-search kbd {font-size: 10px; color: #7e8981; border: 1px solid #d8ded8; border-radius: 5px; padding: 2px 5px;}
.skillswap-embed .notification-btn {width: 39px; height: 39px; border-radius: 9px; border: 1px solid var(--line); background: white; display: grid; place-items: center; margin-left: auto; position: relative;}
.skillswap-embed .notification-btn span {position: absolute; width: 7px; height: 7px; background: #dc695f; border: 1px solid white; border-radius: 50%; right: 8px; top: 7px;}
.skillswap-embed .menu-btn,
.skillswap-embed .mobile-close {display: none;}
.skillswap-embed .page {padding: 35px 38px 60px; max-width: 1450px; margin: auto;}
.skillswap-embed .page-head {display: flex; justify-content: space-between; align-items: end; margin-bottom: 28px;}
.skillswap-embed .page-head h1 {font-size: 29px; letter-spacing: -1px; margin-top: 6px;}
.skillswap-embed .page-head .result-count {color: var(--muted); font-size: 13px;}
.skillswap-embed .section-title {display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px;}
.skillswap-embed .section-title h2 {font-size: 16px;}
.skillswap-embed .section-title button {border: 0; background: transparent; color: var(--green-2); font-size: 12px; font-weight: 700; display: flex; gap: 6px; align-items: center;}
.skillswap-embed .section-title > span {color: var(--muted); font-size: 12px;}
/* Dashboard */
.skillswap-embed .stats-grid {display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; margin-bottom: 32px;}
.skillswap-embed .stat-card {background: white; border: 1px solid var(--line); border-radius: 14px; padding: 19px; display: grid; grid-template-columns: 43px 1fr; grid-template-rows: auto 1fr auto; column-gap: 14px;}
.skillswap-embed .stat-icon {grid-row: span 3; width: 43px; height: 43px; border-radius: 11px; background: var(--green-soft); color: var(--green); display: grid; place-items: center;}
.skillswap-embed .stat-card > span {color: var(--muted); font-size: 12px;}
.skillswap-embed .stat-card > strong {font: 800 28px "Manrope"; line-height: 1.3;}
.skillswap-embed .stat-card > small {color: #819087; font-size: 10px;}
.skillswap-embed .stat-1 .stat-icon {background: var(--amber-soft); color: var(--amber);}
.skillswap-embed .stat-2 .stat-icon {background: var(--blue-soft); color: var(--blue);}
.skillswap-embed .content-grid {display: grid; grid-template-columns: minmax(0, 1fr) 285px; gap: 28px;}
.skillswap-embed .exchange-list {display: flex; flex-direction: column; gap: 10px; margin-bottom: 28px;}
.skillswap-embed .exchange-card {background: white; border: 1px solid var(--line); border-radius: 13px; padding: 16px; display: flex; gap: 15px; align-items: center;}
.skillswap-embed .exchange-users {display: flex; align-items: center;}
.skillswap-embed .exchange-users .avatar + .swap-mini {margin-left: -7px;}
.skillswap-embed .exchange-users .avatar:last-child {margin-left: -7px;}
.skillswap-embed .swap-mini {width: 25px; height: 25px; z-index: 2; background: var(--green); color: white; border: 2px solid white; border-radius: 50%; display: grid; place-items: center;}
.skillswap-embed .exchange-info {flex: 1; display: flex; flex-direction: column; gap: 4px; min-width: 0;}
.skillswap-embed .exchange-info strong {font-size: 13px; display: flex; align-items: center; gap: 6px;}
.skillswap-embed .exchange-info > span {font-size: 11px; color: var(--muted);}
.skillswap-embed .progress {width: 180px; height: 3px; background: #edf0ed; margin-top: 5px; border-radius: 3px;}
.skillswap-embed .progress i {display: block; height: 100%; background: var(--green-2); border-radius: 3px;}
.skillswap-embed .recent-grid {display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px;}
.skillswap-embed .recent-card {border: 1px solid var(--line); background: white; border-radius: 12px; padding: 14px; display: flex; align-items: center; text-align: left; gap: 10px;}
.skillswap-embed .recent-card > div:not(.avatar) {display: flex; flex-direction: column; min-width: 0; flex: 1;}
.skillswap-embed .recent-card strong {font-size: 12px;}
.skillswap-embed .recent-card span {font-size: 10px; color: var(--muted); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;}
.skillswap-embed .recent-card .stars {font-size: 10px; margin-top: 4px;}
.skillswap-embed .recent-card > svg {color: #9ba49e;}
.skillswap-embed .next-session {background: white; border: 1px solid var(--line); border-radius: 15px; padding: 19px; display: flex; flex-direction: column; gap: 12px; position: relative;}
.skillswap-embed .date-block {position: absolute; right: 17px; top: 17px; width: 45px; height: 50px; border-radius: 9px; background: var(--green-soft); display: flex; flex-direction: column; align-items: center; justify-content: center;}
.skillswap-embed .date-block strong {font-size: 18px;}
.skillswap-embed .date-block span {color: var(--green); font-size: 9px; font-weight: 800;}
.skillswap-embed .next-session h3 {margin-top: 9px; font-size: 16px;}
.skillswap-embed .next-session .btn.primary {margin-top: 8px;}
.skillswap-embed .tip-card {margin-top: 16px; border-radius: 15px; background: #eaf1dd; padding: 18px;}
.skillswap-embed .tip-icon {width: 31px; height: 31px; border-radius: 9px; display: grid; place-items: center; background: var(--lime); font-weight: 800;}
.skillswap-embed .tip-card h3 {font-size: 14px; margin: 12px 0 5px;}
.skillswap-embed .tip-card p {font-size: 11px; color: var(--muted); line-height: 1.5;}
.skillswap-embed .tip-card button {border: 0; background: transparent; color: var(--green); padding: 13px 0 0; font-size: 11px; font-weight: 700; display: flex; align-items: center; gap: 5px;}
/* Explore */
.skillswap-embed .search-panel {background: white; border: 1px solid var(--line); border-radius: 14px; padding: 15px; margin-bottom: 23px;}
.skillswap-embed .big-search {display: flex; align-items: center; gap: 10px;}
.skillswap-embed .big-search > svg {color: var(--muted); margin-left: 5px;}
.skillswap-embed .big-search input {flex: 1; border: 0; outline: none; min-width: 0;}
.skillswap-embed .filters {display: flex; align-items: end; gap: 12px; padding-top: 15px; margin-top: 15px; border-top: 1px solid #edf0ed;}
.skillswap-embed .filters > span {display: flex; gap: 6px; align-items: center; font-weight: 700; font-size: 12px; align-self: center;}
.skillswap-embed .filters label {display: flex; flex-direction: column; gap: 5px; color: var(--muted); font-size: 10px; font-weight: 700;}
.skillswap-embed .filters select {min-width: 140px; border: 1px solid var(--line); border-radius: 8px; background: white; padding: 8px 28px 8px 9px; font-size: 12px; color: var(--ink);}
.skillswap-embed .clear {border: 0; background: transparent; color: var(--green); font-size: 11px; font-weight: 700; margin-left: auto; padding: 9px;}
.skillswap-embed .people-grid {display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px;}
.skillswap-embed .person-card {background: white; border: 1px solid var(--line); border-radius: 15px; padding: 19px; position: relative; transition: .2s;}
.skillswap-embed .person-card:hover {box-shadow: var(--shadow); transform: translateY(-2px);}
.skillswap-embed .match-tag {position: absolute; left: 17px; top: 17px; background: var(--green-soft); color: var(--green); font-size: 10px; font-weight: 800; padding: 4px 8px; border-radius: 20px;}
.skillswap-embed .save-btn {position: absolute; right: 16px; top: 15px; border: 0; background: transparent; color: #8b9690;}
.skillswap-embed .save-btn.saved {color: #ca5e65;}
.skillswap-embed .save-btn.saved svg {fill: currentColor;}
.skillswap-embed .person-identity {width: 100%; border: 0; background: transparent; display: flex; align-items: center; flex-direction: column; text-align: center; margin: 8px 0 17px;}
.skillswap-embed .person-identity h2 {font-size: 17px; margin: 10px 0 2px;}
.skillswap-embed .person-identity p {color: var(--muted); font-size: 12px;}
.skillswap-embed .person-identity span {color: #87918b; display: flex; justify-content: center; align-items: center; font-size: 10px; margin-top: 4px;}
.skillswap-embed .card-skills {display: flex; flex-wrap: wrap; gap: 5px; min-height: 53px;}
.skillswap-embed .card-skills > span {width: 100%; font-size: 9px; font-weight: 800; color: #87918b; letter-spacing: .8px;}
.skillswap-embed .wants {background: #f6f7f5; padding: 9px 10px; border-radius: 8px; display: flex; flex-direction: column; margin: 12px 0;}
.skillswap-embed .wants span {font-size: 9px; color: var(--muted);}
.skillswap-embed .wants strong {font-size: 11px; margin-top: 2px;}
.skillswap-embed .person-meta {display: flex; justify-content: space-between; margin-bottom: 15px;}
.skillswap-embed .person-meta > span {color: var(--muted); display: flex; align-items: center; gap: 3px; font-size: 9px;}
.skillswap-embed .skeleton {min-height: 390px; display: flex; flex-direction: column; gap: 16px;}
.skillswap-embed .skeleton > div {height: 38px; border-radius: 8px; background: linear-gradient(90deg, #f0f2f0, #fafbfa, #f0f2f0); background-size: 200% 100%; animation: shimmer 1.2s infinite;}
.skillswap-embed .skeleton > div:first-child {width: 80px; height: 80px; border-radius: 50%; margin: 30px auto 5px;}
.skillswap-embed .skeleton > div:nth-child(3) {height: 70px;}
.skillswap-embed .skeleton > div:last-child {margin-top: auto;}
@keyframes shimmer { to { background-position: -200% 0; } }
.skillswap-embed .empty-state {min-height: 340px; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center;}
.skillswap-embed .empty-state > div {width: 58px; height: 58px; border-radius: 50%; background: var(--green-soft); color: var(--green); display: grid; place-items: center;}
.skillswap-embed .empty-state h2 {font-size: 19px; margin: 15px 0 7px;}
.skillswap-embed .empty-state p {color: var(--muted); font-size: 13px; margin-bottom: 18px;}
/* Profile */
.skillswap-embed .profile-page > .back-link {position: static; margin-bottom: 20px;}
.skillswap-embed .profile-hero {background: white; border: 1px solid var(--line); border-radius: 15px; padding: 27px; display: flex; justify-content: space-between; align-items: center; margin-bottom: 22px;}
.skillswap-embed .profile-main {display: flex; gap: 19px; align-items: center;}
.skillswap-embed .profile-main > div:last-child {display: flex; flex-direction: column; gap: 6px;}
.skillswap-embed .profile-name {display: flex; align-items: center; gap: 10px;}
.skillswap-embed .profile-name h1 {font-size: 26px;}
.skillswap-embed .profile-main p {color: var(--muted); font-size: 14px;}
.skillswap-embed .profile-main > div > span {color: var(--muted); font-size: 11px; display: flex; align-items: center; gap: 5px;}
.skillswap-embed .profile-actions {display: flex; gap: 9px;}
.skillswap-embed .profile-layout {display: grid; grid-template-columns: 1fr 290px; gap: 22px;}
.skillswap-embed .profile-content {display: flex; flex-direction: column; gap: 15px;}
.skillswap-embed .profile-section,
.skillswap-embed .side-card {background: white; border: 1px solid var(--line); border-radius: 14px; padding: 23px;}
.skillswap-embed .profile-section > h2,
.skillswap-embed .side-card > h3 {font-size: 16px; margin-bottom: 15px;}
.skillswap-embed .profile-section > p {color: var(--muted); font-size: 13px; line-height: 1.75;}
.skillswap-embed .skill-detail {display: grid; grid-template-columns: 47px 1fr; gap: 14px; padding: 17px 0; border-top: 1px solid #edf0ed;}
.skillswap-embed .skill-symbol {width: 47px; height: 47px;}
.skillswap-embed .skill-symbol.purple {background: #e9e2f4;}
.skillswap-embed .skill-symbol.small {width: 39px; height: 39px;}
.skillswap-embed .skill-detail h3 {font-size: 14px; display: inline; margin-right: 7px;}
.skillswap-embed .skill-detail .badge {display: inline-flex;}
.skillswap-embed .skill-detail p {color: var(--muted); font-size: 12px; line-height: 1.55; margin: 6px 0;}
.skillswap-embed .skill-detail span {color: var(--green); font-size: 10px; display: flex; align-items: center; gap: 4px;}
.skillswap-embed .review {display: flex; gap: 12px; padding: 17px 0; border-top: 1px solid #edf0ed;}
.skillswap-embed .review > div {flex: 1;}
.skillswap-embed .review > div > div {display: flex; justify-content: space-between;}
.skillswap-embed .review p {color: var(--muted); font-size: 12px; line-height: 1.55; margin: 7px 0;}
.skillswap-embed .review > div > span {color: #8d9891; font-size: 10px;}
.skillswap-embed .profile-side {display: flex; flex-direction: column; gap: 14px;}
.skillswap-embed .wanted-skill {display: flex; align-items: center; gap: 10px; margin-top: 10px;}
.skillswap-embed .wanted-skill > div {display: flex; flex-direction: column;}
.skillswap-embed .wanted-skill strong {font-size: 13px;}
.skillswap-embed .wanted-skill span {color: var(--muted); font-size: 10px;}
.skillswap-embed .availability-row {display: flex; justify-content: space-between; margin: 12px 0; font-size: 11px;}
.skillswap-embed .availability-row span {color: var(--muted);}
.skillswap-embed .side-card > small {display: block; color: #8d9891; font-size: 9px; border-top: 1px solid #edf0ed; padding-top: 11px; margin-top: 13px;}
.skillswap-embed .response-card {display: flex; gap: 10px; align-items: center;}
.skillswap-embed .response-card > svg {color: var(--green);}
.skillswap-embed .response-card > div {display: flex; flex-direction: column;}
.skillswap-embed .response-card strong {font-size: 11px;}
.skillswap-embed .response-card span {font-size: 9px; color: var(--muted); margin-top: 2px;}
/* Requests */
.skillswap-embed .tabs {border-bottom: 1px solid var(--line); display: flex; gap: 25px; margin-bottom: 20px;}
.skillswap-embed .tabs button {border: 0; background: transparent; padding: 0 2px 12px; color: var(--muted); font-weight: 700; font-size: 13px; position: relative;}
.skillswap-embed .tabs button.active {color: var(--green);}
.skillswap-embed .tabs button.active:after {content: ""; position: absolute; height: 2px; background: var(--green); left: 0; right: 0; bottom: -1px;}
.skillswap-embed .tabs button span {display: inline-grid; place-items: center; background: var(--green-soft); color: var(--green); width: 18px; height: 18px; border-radius: 50%; margin-left: 6px; font-size: 9px;}
.skillswap-embed .request-list {max-width: 850px; display: flex; flex-direction: column; gap: 14px;}
.skillswap-embed .request-card {background: white; border: 1px solid var(--line); border-radius: 15px; padding: 20px;}
.skillswap-embed .request-top {display: flex; align-items: center; gap: 12px;}
.skillswap-embed .request-top > div:not(.avatar) {flex: 1;}
.skillswap-embed .request-top h2 {font-size: 16px;}
.skillswap-embed .request-top p {color: var(--muted); font-size: 11px; display: flex; gap: 5px;}
.skillswap-embed .request-top > div > span {color: #8c9790; font-size: 10px;}
.skillswap-embed .request-swap {background: #f5f7f4; border-radius: 10px; padding: 13px; margin: 16px 0; display: grid; grid-template-columns: 1fr 40px 1fr; align-items: center;}
.skillswap-embed .request-swap div {display: flex; flex-direction: column;}
.skillswap-embed .request-swap small {color: var(--muted); font-size: 8px; font-weight: 800; letter-spacing: .8px;}
.skillswap-embed .request-swap strong {font-size: 12px; margin-top: 4px;}
.skillswap-embed .request-swap > span {display: grid; place-items: center; color: var(--green);}
.skillswap-embed .request-card blockquote {margin: 0; color: var(--muted); font-size: 12px; line-height: 1.55;}
.skillswap-embed .request-actions {display: flex; justify-content: flex-end; gap: 8px; border-top: 1px solid #edf0ed; margin-top: 16px; padding-top: 15px;}
/* Messages */
.skillswap-embed .messages-page {height: calc(100vh - 68px); display: grid; grid-template-columns: 285px minmax(340px, 1fr) 260px; background: white;}
.skillswap-embed .conversations {border-right: 1px solid var(--line); overflow: auto;}
.skillswap-embed .messages-title {height: 67px; display: flex; align-items: center; justify-content: space-between; padding: 0 18px;}
.skillswap-embed .messages-title h1 {font-size: 21px;}
.skillswap-embed .messages-title button {width: 32px; height: 32px; border: 1px solid var(--line); background: white; border-radius: 8px; display: grid; place-items: center;}
.skillswap-embed .conversation-search {margin: 0 13px 12px; height: 36px; background: #f3f5f2; border-radius: 8px; display: flex; align-items: center; gap: 7px; padding: 0 9px;}
.skillswap-embed .conversation-search input {background: transparent; border: 0; outline: 0; min-width: 0; font-size: 11px;}
.skillswap-embed .conversation {width: 100%; border: 0; border-left: 3px solid transparent; background: white; padding: 13px 14px 13px 11px; display: flex; gap: 10px; text-align: left;}
.skillswap-embed .conversation.active {background: #f0f5ef; border-left-color: var(--green);}
.skillswap-embed .conversation > div:not(.avatar) {flex: 1; min-width: 0;}
.skillswap-embed .conversation strong {font-size: 12px;}
.skillswap-embed .conversation p {font-size: 10px; color: var(--muted); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; margin-top: 3px;}
.skillswap-embed .conversation > span {display: flex; flex-direction: column; align-items: end; gap: 6px; color: #88938c; font-size: 9px;}
.skillswap-embed .conversation b {display: grid; place-items: center; background: var(--green); color: white; width: 17px; height: 17px; border-radius: 50%; font-size: 8px;}
.skillswap-embed .chat {min-width: 0; display: grid; grid-template-rows: 67px 1fr 70px;}
.skillswap-embed .chat > header {border-bottom: 1px solid var(--line); display: flex; justify-content: space-between; align-items: center; padding: 0 18px;}
.skillswap-embed .chat > header > div:last-child {display: flex; gap: 7px;}
.skillswap-embed .chat-body {background: #fbfcfa; padding: 20px 26px; overflow-y: auto;}
.skillswap-embed .date-separator {display: flex; align-items: center; justify-content: center; margin-bottom: 22px;}
.skillswap-embed .date-separator span {color: #89958d; font-size: 9px; background: #edf0ed; border-radius: 20px; padding: 4px 9px;}
.skillswap-embed .message-row {display: flex; gap: 8px; margin-bottom: 14px; align-items: end;}
.skillswap-embed .message-row > div:last-child {max-width: 65%;}
.skillswap-embed .message-row p {background: white; border: 1px solid var(--line); border-radius: 12px 12px 12px 3px; padding: 10px 12px; font-size: 12px; line-height: 1.5;}
.skillswap-embed .message-row span {color: #94a099; font-size: 8px; margin: 4px; display: block;}
.skillswap-embed .message-row.mine {justify-content: flex-end;}
.skillswap-embed .message-row.mine p {background: var(--green); color: white; border-color: var(--green); border-radius: 12px 12px 3px 12px;}
.skillswap-embed .message-row.mine span {text-align: right;}
.skillswap-embed .composer {border-top: 1px solid var(--line); padding: 12px 17px; display: flex; gap: 8px; align-items: center;}
.skillswap-embed .composer > button {border: 0; background: transparent;}
.skillswap-embed .composer input {min-width: 0; flex: 1; border: 1px solid var(--line); border-radius: 10px; padding: 10px 12px; outline: none; font-size: 12px;}
.skillswap-embed .composer .send-btn {width: 39px; height: 39px; background: var(--green); color: white; border-radius: 10px; display: grid; place-items: center;}
.skillswap-embed .chat-details {border-left: 1px solid var(--line); padding: 25px 20px; display: flex; align-items: center; flex-direction: column; overflow: auto;}
.skillswap-embed .chat-details h2 {font-size: 16px; margin: 10px 0 2px;}
.skillswap-embed .chat-details > p {font-size: 10px; color: var(--muted); margin-bottom: 7px;}
.skillswap-embed .chat-details > .btn {margin-top: 15px;}
.skillswap-embed .detail-divider {width: 100%; border-top: 1px solid var(--line); margin: 20px 0;}
.skillswap-embed .chat-details > h3 {width: 100%; font-size: 12px; margin-bottom: 12px;}
.skillswap-embed .exchange-compact {width: 100%; display: grid; grid-template-columns: 1fr 22px 1fr; align-items: center; background: #f4f6f3; padding: 10px; border-radius: 9px;}
.skillswap-embed .exchange-compact span {font-size: 10px; font-weight: 700;}
.skillswap-embed .exchange-compact small {display: block; color: var(--muted); font-size: 7px;}
.skillswap-embed .exchange-compact svg {color: var(--green);}
.skillswap-embed .next-compact {width: 100%; display: flex; gap: 9px; align-items: center; color: var(--green);}
.skillswap-embed .next-compact > div {display: flex; flex-direction: column; color: var(--ink);}
.skillswap-embed .next-compact strong {font-size: 10px;}
.skillswap-embed .next-compact span {font-size: 9px; color: var(--muted);}
/* Sessions */
.skillswap-embed .week-strip {background: white; border: 1px solid var(--line); border-radius: 14px; display: grid; grid-template-columns: repeat(7, 1fr); margin-bottom: 25px; overflow: hidden;}
.skillswap-embed .week-strip button {height: 78px; border: 0; border-right: 1px solid var(--line); background: white; display: flex; flex-direction: column; align-items: center; justify-content: center; position: relative;}
.skillswap-embed .week-strip button:last-child {border: 0;}
.skillswap-embed .week-strip span {color: var(--muted); font-size: 9px; font-weight: 800;}
.skillswap-embed .week-strip strong {margin-top: 5px;}
.skillswap-embed .week-strip button.active {background: var(--green); color: white;}
.skillswap-embed .week-strip button.active span {color: #c9dacf;}
.skillswap-embed .week-strip i {width: 4px; height: 4px; border-radius: 50%; background: var(--green-2); position: absolute; bottom: 8px;}
.skillswap-embed .week-strip button.active i {background: var(--lime);}
.skillswap-embed .session-layout {display: grid; grid-template-columns: 1fr 250px; gap: 25px;}
.skillswap-embed .session-layout > section {display: flex; flex-direction: column; gap: 10px;}
.skillswap-embed .session-card {background: white; border: 1px solid var(--line); border-radius: 14px; padding: 18px; display: grid; grid-template-columns: 64px 1fr auto; align-items: center; gap: 16px;}
.skillswap-embed .session-card.featured {border-left: 3px solid var(--green);}
.skillswap-embed .session-time {border-right: 1px solid var(--line); display: flex; flex-direction: column; position: relative;}
.skillswap-embed .session-time strong {font: 700 20px "Manrope";}
.skillswap-embed .session-time span {font-size: 9px; color: var(--muted);}
.skillswap-embed .session-time i {width: 7px; height: 7px; border-radius: 50%; background: var(--green); position: absolute; right: -4px; top: 12px;}
.skillswap-embed .session-info h2 {font-size: 14px; margin: 6px 0 2px;}
.skillswap-embed .session-info > p {color: var(--muted); font-size: 10px;}
.skillswap-embed .session-info .mini-person {margin-top: 9px;}
.skillswap-embed .session-buttons {display: flex; gap: 7px;}
.skillswap-embed .past-title {margin: 19px 0 2px;}
.skillswap-embed .session-card.muted {opacity: .75;}
.skillswap-embed .session-summary {background: #193729; color: white; border-radius: 15px; padding: 22px; display: grid; grid-template-columns: 1fr 1fr; gap: 18px 10px;}
.skillswap-embed .session-summary .section-eyebrow,
.skillswap-embed .session-summary h3,
.skillswap-embed .session-summary .streak {grid-column: span 2;}
.skillswap-embed .session-summary h3 {font-size: 17px;}
.skillswap-embed .session-summary > div:not(.streak) {display: flex; gap: 7px; align-items: center;}
.skillswap-embed .session-summary > div > strong {color: var(--lime); font: 800 25px "Manrope";}
.skillswap-embed .session-summary > div > span {color: #adbbb3; font-size: 9px; line-height: 1.4;}
.skillswap-embed .streak {background: rgba(255,255,255,.08); border-radius: 10px; padding: 10px; display: flex; gap: 8px;}
.skillswap-embed .streak svg {color: var(--lime);}
.skillswap-embed .streak span {display: flex; flex-direction: column;}
.skillswap-embed .streak strong {color: white; font-size: 10px;}
.skillswap-embed .review-modal {display: flex; flex-direction: column; align-items: center; gap: 16px; text-align: center;}
.skillswap-embed .review-modal > p {color: var(--muted); font-size: 13px;}
.skillswap-embed .rating-pick {display: flex; gap: 7px;}
.skillswap-embed .rating-pick button {border: 0; background: transparent; color: #cdd3ce; padding: 2px;}
.skillswap-embed .rating-pick button.active {color: #e6a627;}
.skillswap-embed .rating-pick button.active svg {fill: currentColor;}
.skillswap-embed .review-modal label {text-align: left; width: 100%;}
.skillswap-embed .review-modal textarea {min-height: 90px; resize: vertical;}
/* Settings */
.skillswap-embed .settings-layout {display: grid; grid-template-columns: 190px minmax(0, 690px); gap: 25px;}
.skillswap-embed .settings-layout > nav {display: flex; flex-direction: column; gap: 4px;}
.skillswap-embed .settings-layout > nav button {height: 41px; border: 0; background: transparent; border-radius: 8px; padding: 0 11px; display: flex; align-items: center; gap: 10px; color: var(--muted); font-weight: 600; font-size: 12px;}
.skillswap-embed .settings-layout > nav button.active {background: var(--green-soft); color: var(--green);}
.skillswap-embed .settings-form {background: white; border: 1px solid var(--line); border-radius: 15px; padding: 24px; display: flex; flex-direction: column; gap: 18px;}
.skillswap-embed .settings-header {border-bottom: 1px solid var(--line); padding-bottom: 18px;}
.skillswap-embed .settings-header h2 {font-size: 18px;}
.skillswap-embed .settings-header p {color: var(--muted); font-size: 11px; margin-top: 4px;}
.skillswap-embed .photo-setting {display: flex; gap: 15px; align-items: center;}
.skillswap-embed .photo-setting > div {display: flex; flex-direction: column; align-items: start; gap: 6px;}
.skillswap-embed .photo-setting span {color: var(--muted); font-size: 9px;}
.skillswap-embed .settings-form textarea {min-height: 100px; resize: vertical;}
.skillswap-embed .settings-actions {border-top: 1px solid var(--line); padding-top: 18px; display: flex; justify-content: flex-end;}
.skillswap-embed .availability-settings h3 {font-size: 13px; margin-bottom: 10px;}
.skillswap-embed .day-row {display: grid; grid-template-columns: 38px 1fr 110px 20px 110px; align-items: center; gap: 9px; padding: 8px 0; border-bottom: 1px solid #edf0ed;}
.skillswap-embed .day-row strong {font-size: 11px;}
.skillswap-embed .day-row span {color: var(--muted); font-size: 10px; text-align: center;}
.skillswap-embed .day-row input {padding: 8px;}
.skillswap-embed .switch {display: block !important;}
.skillswap-embed .switch input {display: none;}
.skillswap-embed .switch i {display: block; width: 31px; height: 18px; border-radius: 20px; background: #d5dbd6; position: relative; transition: .2s;}
.skillswap-embed .switch i:after {content: ""; position: absolute; width: 14px; height: 14px; border-radius: 50%; background: white; top: 2px; left: 2px; transition: .2s; box-shadow: 0 1px 3px rgba(0,0,0,.2);}
.skillswap-embed .switch input:checked + i {background: var(--green);}
.skillswap-embed .switch input:checked + i:after {left: 15px;}
.skillswap-embed .notification-settings > div {display: flex; justify-content: space-between; align-items: center; padding: 14px 0; border-bottom: 1px solid #edf0ed;}
.skillswap-embed .notification-settings > div > span {display: flex; flex-direction: column;}
.skillswap-embed .notification-settings strong {font-size: 12px;}
.skillswap-embed .notification-settings small {color: var(--muted); margin-top: 3px; font-size: 9px;}
.skillswap-embed .empty-settings {min-height: 260px; display: flex; flex-direction: column; align-items: center; justify-content: center; color: var(--muted); text-align: center;}
.skillswap-embed .empty-settings h3 {color: var(--ink); margin: 12px 0 5px; font-size: 16px;}
.skillswap-embed .empty-settings p {font-size: 11px; margin-bottom: 14px;}
/* Overlay */
.skillswap-embed .notification-panel {position: fixed; z-index: 40; top: 61px; right: 100px; width: 365px; background: white; border: 1px solid var(--line); border-radius: 14px; box-shadow: 0 18px 55px rgba(20,45,31,.18); overflow: hidden;}
.skillswap-embed .panel-head {padding: 16px; display: flex; justify-content: space-between; border-bottom: 1px solid var(--line);}
.skillswap-embed .panel-head h2 {font-size: 16px;}
.skillswap-embed .panel-head button {border: 0; background: transparent; color: var(--green); font-size: 10px; font-weight: 700;}
.skillswap-embed .notification-panel > button {width: 100%; border: 0; border-bottom: 1px solid #edf0ed; background: white; padding: 13px 14px; display: grid; grid-template-columns: 36px 1fr 7px; gap: 10px; text-align: left;}
.skillswap-embed .notification-panel > button.unread {background: #f7faf6;}
.skillswap-embed .notification-icon {width: 35px; height: 35px; border-radius: 10px; background: var(--green-soft); color: var(--green); display: grid; place-items: center;}
.skillswap-embed .notification-icon.calendar {background: var(--blue-soft); color: var(--blue);}
.skillswap-embed .notification-icon.star {background: var(--amber-soft); color: var(--amber);}
.skillswap-embed .notification-panel > button > span:nth-child(2) {display: flex; flex-direction: column;}
.skillswap-embed .notification-panel strong {font-size: 11px;}
.skillswap-embed .notification-panel p {color: var(--muted); font-size: 10px; margin: 2px 0;}
.skillswap-embed .notification-panel small {color: #96a099; font-size: 8px;}
.skillswap-embed .notification-panel > button > i {width: 6px; height: 6px; border-radius: 50%; background: var(--green-2); margin-top: 5px;}
.skillswap-embed .modal-backdrop {position: fixed; inset: 0; z-index: 60; background: rgba(12,26,18,.54); backdrop-filter: blur(2px); display: grid; place-items: center; padding: 20px;}
.skillswap-embed .modal {width: min(540px, 100%); max-height: calc(100vh - 40px); overflow: auto; background: white; border-radius: 17px; box-shadow: 0 25px 80px rgba(0,0,0,.25); padding: 22px;}
.skillswap-embed .modal-head {display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;}
.skillswap-embed .modal-head h2 {font-size: 19px;}
.skillswap-embed .request-form {display: flex; flex-direction: column; gap: 16px;}
.skillswap-embed .modal-person {display: flex; align-items: center; gap: 11px; background: #f4f7f3; padding: 12px; border-radius: 10px; font-size: 12px;}
.skillswap-embed .request-form textarea {min-height: 100px; resize: vertical;}
.skillswap-embed .modal-actions {display: flex; justify-content: flex-end; gap: 8px; border-top: 1px solid var(--line); padding-top: 16px;}
.skillswap-embed .toast {position: fixed; z-index: 80; left: 50%; bottom: 25px; transform: translateX(-50%); background: #173b2b; color: white; border-radius: 11px; padding: 12px 18px; display: flex; align-items: center; gap: 9px; font-size: 12px; box-shadow: var(--shadow); animation: toast-in .25s ease;}
.skillswap-embed .toast svg {color: var(--lime);}
@keyframes toast-in { from { transform: translate(-50%, 15px); opacity: 0; } }
@media (max-width: 1080px) {
.skillswap-embed .hero {grid-template-columns: 1fr 1fr; gap: 25px;}
.skillswap-embed .hero-visual {transform: scale(.88);}
.skillswap-embed .people-grid {grid-template-columns: repeat(2, 1fr);}
.skillswap-embed .recent-grid {grid-template-columns: 1fr;}
.skillswap-embed .messages-page {grid-template-columns: 250px 1fr;}
.skillswap-embed .chat-details {display: none;}
.skillswap-embed .filters {flex-wrap: wrap;}
.skillswap-embed .filters .clear {margin-left: 0;}
.skillswap-embed .auth-page {grid-template-columns: 38% 62%;}
.skillswap-embed .auth-brand {padding: 35px;}
.skillswap-embed .auth-quote h2 {font-size: 30px;}
}
@media (max-width: 820px) {
.skillswap-embed .public-nav nav > button:not(.btn) {display: none;}
.skillswap-embed .hero {grid-template-columns: 1fr; padding-top: 45px;}
.skillswap-embed .hero-copy {text-align: center;}
.skillswap-embed .hero-copy > p {margin: auto;}
.skillswap-embed .hero-actions,
.skillswap-embed .trusted {justify-content: center;}
.skillswap-embed .hero-visual {width: min(550px, 100%); margin: -25px auto 0;}
.skillswap-embed .steps {grid-template-columns: 1fr;}
.skillswap-embed .step p {max-width: none;}
.skillswap-embed .skill-cloud {grid-template-columns: repeat(2, 1fr);}
.skillswap-embed .cta {margin: 50px 20px; padding: 40px; flex-direction: column; align-items: start;}
.skillswap-embed .app-shell > aside {transform: translateX(-100%); transition: .25s; box-shadow: var(--shadow);}
.skillswap-embed .app-shell > aside.mobile-open {transform: translateX(0);}
.skillswap-embed .side-top {display: flex; justify-content: space-between;}
.skillswap-embed .mobile-close {display: grid; border: 0; background: transparent; color: white;}
.skillswap-embed .app-main {margin-left: 0;}
.skillswap-embed .menu-btn {display: grid; border: 0; background: transparent;}
.skillswap-embed .page {padding: 28px 22px 50px;}
.skillswap-embed .content-grid,
.skillswap-embed .profile-layout,
.skillswap-embed .session-layout {grid-template-columns: 1fr;}
.skillswap-embed .dashboard-side {display: grid; grid-template-columns: 1fr 1fr; gap: 14px;}
.skillswap-embed .dashboard-side > .section-title {grid-column: span 2; margin-bottom: -4px;}
.skillswap-embed .tip-card {margin-top: 0;}
.skillswap-embed .profile-side {display: grid; grid-template-columns: repeat(2, 1fr);}
.skillswap-embed .response-card {grid-column: span 2;}
.skillswap-embed .settings-layout {grid-template-columns: 150px 1fr;}
.skillswap-embed .auth-page {grid-template-columns: 1fr;}
.skillswap-embed .auth-brand {display: none;}
.skillswap-embed .messages-page {grid-template-columns: 220px 1fr;}
}
@media (max-width: 600px) {
.skillswap-embed .public-nav {height: 66px;}
.skillswap-embed .public-nav nav {gap: 8px;}
.skillswap-embed .public-nav nav > .btn {padding: 0 12px; min-height: 38px;}
.skillswap-embed .hero {padding: 38px 18px 65px;}
.skillswap-embed .hero-copy h1 {font-size: 45px; letter-spacing: -2.5px;}
.skillswap-embed .hero-copy > p {font-size: 15px;}
.skillswap-embed .hero-actions {flex-direction: column;}
.skillswap-embed .hero-visual {height: 380px; transform: none;}
.skillswap-embed .swap-card {width: 200px; padding: 13px;}
.skillswap-embed .card-a {left: 0;}
.skillswap-embed .card-b {right: 0;}
.skillswap-embed .floating-note {display: none;}
.skillswap-embed .how-section {padding-top: 65px; padding-bottom: 65px;}
.skillswap-embed .how-section > h2,
.skillswap-embed .skills-head h2 {font-size: 30px;}
.skillswap-embed .skill-cloud {grid-template-columns: 1fr;}
.skillswap-embed .skills-head {align-items: start; flex-direction: column; gap: 20px;}
.skillswap-embed .quote-section blockquote {font-size: 22px;}
.skillswap-embed .cta {padding: 30px 24px;}
.skillswap-embed .cta h2 {font-size: 26px;}
.skillswap-embed footer {padding: 25px; flex-wrap: wrap; gap: 15px;}
.skillswap-embed footer p {order: 3; flex-basis: 100%;}
.skillswap-embed .header-search {display: none;}
.skillswap-embed .app-header {padding: 0 15px;}
.skillswap-embed .header-cta {font-size: 0; width: 40px; padding: 0;}
.skillswap-embed .page {padding: 23px 15px 45px;}
.skillswap-embed .page-head h1 {font-size: 25px;}
.skillswap-embed .stats-grid {grid-template-columns: 1fr;}
.skillswap-embed .exchange-card {flex-wrap: wrap;}
.skillswap-embed .exchange-info {min-width: 160px;}
.skillswap-embed .exchange-card > .btn {width: 100%;}
.skillswap-embed .recent-grid {grid-template-columns: 1fr;}
.skillswap-embed .dashboard-side {display: block;}
.skillswap-embed .dashboard-side > .section-title {margin-top: 24px;}
.skillswap-embed .tip-card {margin-top: 14px;}
.skillswap-embed .people-grid {grid-template-columns: 1fr;}
.skillswap-embed .big-search .btn {font-size: 0; width: 40px; padding: 0;}
.skillswap-embed .filters label {width: calc(50% - 6px);}
.skillswap-embed .filters select {min-width: 0; width: 100%;}
.skillswap-embed .profile-hero {align-items: start; flex-direction: column; gap: 20px;}
.skillswap-embed .profile-main {align-items: start;}
.skillswap-embed .profile-actions {width: 100%;}
.skillswap-embed .profile-actions .btn {flex: 1; padding: 0 10px;}
.skillswap-embed .profile-side {grid-template-columns: 1fr;}
.skillswap-embed .response-card {grid-column: auto;}
.skillswap-embed .request-swap {grid-template-columns: 1fr; gap: 8px;}
.skillswap-embed .request-swap > span {transform: rotate(90deg);}
.skillswap-embed .request-actions .btn {flex: 1;}
.skillswap-embed .messages-page {display: block; height: auto;}
.skillswap-embed .conversations {display: none;}
.skillswap-embed .chat {height: calc(100vh - 68px);}
.skillswap-embed .message-row > div:last-child {max-width: 82%;}
.skillswap-embed .week-strip button {height: 64px;}
.skillswap-embed .session-card {grid-template-columns: 52px 1fr;}
.skillswap-embed .session-buttons {grid-column: 1 / span 2;}
.skillswap-embed .session-buttons .btn {flex: 1;}
.skillswap-embed .settings-layout {grid-template-columns: 1fr;}
.skillswap-embed .settings-layout > nav {flex-direction: row; overflow-x: auto;}
.skillswap-embed .settings-layout > nav button {flex: none;}
.skillswap-embed .settings-form {padding: 18px;}
.skillswap-embed .field-row {grid-template-columns: 1fr;}
.skillswap-embed .day-row {grid-template-columns: 32px 1fr 90px 12px 90px;}
.skillswap-embed .notification-panel {right: 10px; left: 10px; width: auto;}
.skillswap-embed .auth-form-wrap {padding: 95px 20px 40px;}
.skillswap-embed .auth-form h1 {font-size: 29px;}
.skillswap-embed .auth-form-wrap .back-link {left: 20px; top: 25px;}
}
/* Local reset: intentionally limited to this embedded app. */
.skillswap-embed { box-sizing: border-box; min-height: 100%; color: #17251d; background: #f8faf7; font-family: 'DM Sans', sans-serif; font-synthesis: none; }
.skillswap-embed *, .skillswap-embed *::before, .skillswap-embed *::after { box-sizing: inherit; }
.skillswap-embed button, .skillswap-embed input, .skillswap-embed select, .skillswap-embed textarea { font: inherit; }
.skillswap-embed button { color: inherit; cursor: pointer; }
.skillswap-embed h1, .skillswap-embed h2, .skillswap-embed h3, .skillswap-embed p { margin: 0; }
.skillswap-embed h1, .skillswap-embed h2, .skillswap-embed h3, .skillswap-embed .logo { font-family: 'Manrope', sans-serif; }
`;

const people = [
  {
    id: 1,
    name: "Maya Chen",
    role: "Product designer",
    location: "Vancouver, Canada",
    avatar: "MC",
    color: "sage",
    rating: 4.9,
    reviews: 28,
    bio: "Product designer who loves turning complex ideas into clear, useful experiences. I teach Figma through practical projects.",
    teaches: [
      { name: "Figma", level: "Expert" },
      { name: "UX research", level: "Advanced" },
    ],
    learns: ["Conversational Spanish", "Photography"],
    availability: "Weekday evenings",
    languages: ["English", "Mandarin"],
    match: 96,
  },
  {
    id: 2,
    name: "Leo Martins",
    role: "Frontend engineer",
    location: "Lisbon, Portugal",
    avatar: "LM",
    color: "blue",
    rating: 4.8,
    reviews: 19,
    bio: "React engineer and patient mentor. I like pairing on real code and explaining the why behind every pattern.",
    teaches: [
      { name: "React", level: "Expert" },
      { name: "TypeScript", level: "Advanced" },
    ],
    learns: ["English speaking", "UI design"],
    availability: "Weekends",
    languages: ["Portuguese", "English"],
    match: 92,
  },
  {
    id: 3,
    name: "Amara Okafor",
    role: "Language coach",
    location: "London, UK",
    avatar: "AO",
    color: "rose",
    rating: 5,
    reviews: 34,
    bio: "Certified English coach focused on confidence, natural conversation, and kind, actionable feedback.",
    teaches: [
      { name: "English speaking", level: "Expert" },
      { name: "Public speaking", level: "Advanced" },
    ],
    learns: ["React", "Guitar"],
    availability: "Flexible",
    languages: ["English", "French"],
    match: 89,
  },
  {
    id: 4,
    name: "Jon Bell",
    role: "Studio photographer",
    location: "Austin, USA",
    avatar: "JB",
    color: "amber",
    rating: 4.7,
    reviews: 15,
    bio: "Portrait photographer teaching light, composition, and editing without getting lost in technical jargon.",
    teaches: [
      { name: "Photography", level: "Expert" },
      { name: "Lightroom", level: "Advanced" },
    ],
    learns: ["Figma", "Italian"],
    availability: "Weekday mornings",
    languages: ["English"],
    match: 85,
  },
  {
    id: 5,
    name: "Sofia Reyes",
    role: "Spanish tutor",
    location: "Mexico City, Mexico",
    avatar: "SR",
    color: "violet",
    rating: 4.9,
    reviews: 41,
    bio: "Friendly Spanish tutor. My sessions use music, stories, and real-life situations so vocabulary sticks.",
    teaches: [
      { name: "Spanish", level: "Expert" },
      { name: "Creative writing", level: "Advanced" },
    ],
    learns: ["Product design", "Yoga"],
    availability: "Weekday evenings",
    languages: ["Spanish", "English"],
    match: 82,
  },
  {
    id: 6,
    name: "Noah Williams",
    role: "Music producer",
    location: "Melbourne, Australia",
    avatar: "NW",
    color: "mint",
    rating: 4.8,
    reviews: 22,
    bio: "Guitarist and producer helping beginners play songs they love from their very first session.",
    teaches: [
      { name: "Guitar", level: "Expert" },
      { name: "Music production", level: "Advanced" },
    ],
    learns: ["TypeScript", "French"],
    availability: "Weekends",
    languages: ["English"],
    match: 78,
  },
];
const notifications = [
  {
    id: 1,
    icon: "message",
    title: "New message from Amara",
    body: "Thursday at 6 PM works perfectly!",
    time: "8 min",
    unread: true,
  },
  {
    id: 2,
    icon: "swap",
    title: "Leo accepted your exchange",
    body: "React mentoring for English practice",
    time: "1 hr",
    unread: true,
  },
  {
    id: 3,
    icon: "calendar",
    title: "Session tomorrow",
    body: "Figma fundamentals with Maya at 5:30 PM",
    time: "3 hr",
    unread: true,
  },
  {
    id: 4,
    icon: "star",
    title: "You received a new review",
    body: "Jon rated your photography feedback 5 stars",
    time: "Yesterday",
    unread: false,
  },
];
const conversations = [
  {
    id: 1,
    person: people[2],
    preview: "Thursday at 6 PM works perfectly!",
    time: "8m",
    unread: 2,
  },
  {
    id: 2,
    person: people[1],
    preview: "I sent over the React exercises.",
    time: "1h",
    unread: 0,
  },
  {
    id: 3,
    person: people[0],
    preview: "Your wireframes are getting stronger!",
    time: "Tue",
    unread: 0,
  },
  {
    id: 4,
    person: people[3],
    preview: "Try shooting closer to golden hour.",
    time: "Mon",
    unread: 0,
  },
];
const messages = [
  {
    id: 1,
    mine: false,
    text: "Hey Alex! I saw you want to improve your English conversation.",
    time: "5:42 PM",
  },
  {
    id: 2,
    mine: true,
    text: "Yes! I can read well, but I want to sound more natural when I speak. I’d be happy to help you learn React in return.",
    time: "5:45 PM",
  },
  {
    id: 3,
    mine: false,
    text: "That sounds like a great swap. I’m starting a small portfolio project, so React would be perfect.",
    time: "5:47 PM",
  },
  {
    id: 4,
    mine: true,
    text: "How does Thursday evening sound for our first session?",
    time: "5:49 PM",
  },
  {
    id: 5,
    mine: false,
    text: "Thursday at 6 PM works perfectly!",
    time: "5:50 PM",
  },
];


import { useMemo, useState } from "react";
const icons = {
  arrow: (<>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </>),
  back: (<>
    <path d="m15 18-6-6 6-6" />
  </>),
  bell: (<>
    <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4" />
  </>),
  calendar: (<>
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M16 3v4M8 3v4M3 11h18" />
  </>),
  check: (<>
    <path d="m5 12 4 4L19 6" />
  </>),
  chevron: (<>
    <path d="m9 18 6-6-6-6" />
  </>),
  clock: (<>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </>),
  close: (<>
    <path d="m6 6 12 12M18 6 6 18" />
  </>),
  filter: (<>
    <path d="M4 6h16M7 12h10M10 18h4" />
  </>),
  globe: (<>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
  </>),
  grid: (<>
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
    <rect x="14" y="14" width="7" height="7" rx="1" />
  </>),
  heart: (<>
    <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />
  </>),
  home: (<>
    <path d="m3 11 9-8 9 8v10h-6v-6H9v6H3Z" />
  </>),
  link: (<>
    <path d="M10 13a5 5 0 0 0 7.5.5l2-2a5 5 0 0 0-7-7l-1 1M14 11a5 5 0 0 0-7.5-.5l-2 2a5 5 0 0 0 7 7l1-1" />
  </>),
  location: (<>
    <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
    <circle cx="12" cy="10" r="2" />
  </>),
  logout: (<>
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9" />
  </>),
  menu: (<>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </>),
  message: (<>
    <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z" />
  </>),
  more: (<>
    <circle cx="5" cy="12" r="1" />
    <circle cx="12" cy="12" r="1" />
    <circle cx="19" cy="12" r="1" />
  </>),
  plus: (<>
    <path d="M12 5v14M5 12h14" />
  </>),
  search: (<>
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-4-4" />
  </>),
  send: (<>
    <path d="m22 2-7 20-4-9-9-4Z" />
    <path d="M22 2 11 13" />
  </>),
  settings: (<>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4V21a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9A1.7 1.7 0 0 0 3 14H3v-4h.1a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1a1.7 1.7 0 0 0 1.9.3 1.7 1.7 0 0 0 1-1.6V3h4v.1a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1Z" />
  </>),
  star: (<>
    <path d="m12 2 3 6 6.5.9-4.7 4.6 1.1 6.5-5.9-3.1L6.1 20l1.1-6.5-4.7-4.6L9 8Z" />
  </>),
  swap: (<>
    <path d="M7 7h11l-3-3M17 17H6l3 3M18 7l3 3-3 3M6 17l-3-3 3-3" />
  </>),
  user: (<>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21a8 8 0 0 1 16 0" />
  </>),
  video: (<>
    <rect x="3" y="6" width="13" height="12" rx="2" />
    <path d="m16 10 5-3v10l-5-3Z" />
  </>),
};
function Icon({ name, size = 18 }) {
  return (<svg aria-hidden="true" className="icon" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    {icons[name]}
  </svg>);
}
function Logo({ onClick }) {
  return (<button className="logo" onClick={onClick} aria-label="SkillSwap home">
    <span className="logo-mark">
      <Icon name="swap" size={20} />
    </span>
    <span>
      Skill<span>Swap</span>
    </span>
  </button>);
}
function Avatar({ person, size = "md", online = false, }) {
  return (<div className={`avatar ${person.color} ${size}`} aria-label={person.name}>
    {person.avatar}
    {online && <span className="online" />}
  </div>);
}
function Button({ children, variant = "primary", icon, onClick, type = "button", disabled = false, className = "", }) {
  return (<button type={type} disabled={disabled} onClick={onClick} className={`btn ${variant} ${className}`}>
    {icon && <Icon name={icon} />}
    {children}
  </button>);
}
function Stars({ rating, count }) {
  return (<span className="stars">
    <Icon name="star" size={15} />
    <strong>{rating.toFixed(1)}</strong>
    {count !== undefined && <span>({count})</span>}
  </span>);
}
function Badge({ children, tone = "neutral", }) {
  return <span className={`badge ${tone}`}>{children}</span>;
}
function Modal({ title, children, onClose, }) {
  return (<div className="modal-backdrop" onMouseDown={onClose}>
    <div className="modal" onMouseDown={(e) => e.stopPropagation()}>
      <div className="modal-head">
        <h2>{title}</h2>
        <button className="icon-btn" onClick={onClose} aria-label="Close">
          <Icon name="close" />
        </button>
      </div>
      {children}
    </div>
  </div>);
}
function Landing({ navigate }) {
  const skillNames = [
    "React",
    "Spanish",
    "Photography",
    "Figma",
    "Guitar",
    "Public speaking",
  ];
  return (<div className="public-page">
    <header className="public-nav">
      <Logo onClick={() => navigate("landing")} />
      <nav>
        <button onClick={() => document
          .getElementById("how")
          ?.scrollIntoView({ behavior: "smooth" })}>
          How it works
        </button>
        <button onClick={() => document
          .getElementById("skills")
          ?.scrollIntoView({ behavior: "smooth" })}>
          Explore skills
        </button>
        <button onClick={() => navigate("login")}>Log in</button>
        <Button onClick={() => navigate("signup")}>Start swapping</Button>
      </nav>
    </header>
    <main>
      <section className="hero">
        <div className="hero-copy">
          <Badge tone="green">A better way to grow</Badge>
          <h1>
            Your skills are <em>worth sharing.</em>
          </h1>
          <p>
            Learn anything by teaching what you know. SkillSwap connects
            curious people for one-to-one skill exchanges—no fees, just shared
            growth.
          </p>
          <div className="hero-actions">
            <Button onClick={() => navigate("signup")} icon="arrow">
              Find your skill swap
            </Button>
            <Button variant="secondary" onClick={() => document
              .getElementById("how")
              ?.scrollIntoView({ behavior: "smooth" })}>
              See how it works
            </Button>
          </div>
          <div className="trusted">
            <div className="avatar-stack">
              {people.slice(0, 4).map((p) => (<Avatar key={p.id} person={p} size="sm" />))}
            </div>
            <span>
              <strong>4,800+ learners</strong>
              <br />
              sharing skills this week
            </span>
          </div>
        </div>
        <div className="hero-visual">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="swap-card card-a">
            <div className="mini-person">
              <Avatar person={people[1]} />
              <div>
                <strong>Leo</strong>
                <span>Teaches React</span>
              </div>
            </div>
            <div className="skill-pill">
              <span className="skill-icon">{"{ }"}</span>React development
            </div>
          </div>
          <div className="swap-center">
            <Icon name="swap" size={30} />
          </div>
          <div className="swap-card card-b">
            <div className="mini-person">
              <Avatar person={people[2]} />
              <div>
                <strong>Amara</strong>
                <span>Teaches English</span>
              </div>
            </div>
            <div className="skill-pill">
              <span className="skill-icon">Aa</span>English speaking
            </div>
          </div>
          <div className="floating-note">
            <Icon name="check" />
            <span>
              <strong>It’s a match!</strong>
              <small>92% skill compatibility</small>
            </span>
          </div>
        </div>
      </section>
      <section className="how-section" id="how">
        <div className="section-eyebrow">Simple by design</div>
        <h2>
          Turn what you know into
          <br />
          what you want to learn
        </h2>
        <div className="steps">
          {[
            [
              "01",
              "Create your skill profile",
              "Share what you can teach, what you’re curious about, and when you’re free.",
            ],
            [
              "02",
              "Find the right people",
              "Browse people with complementary skills and a schedule that fits yours.",
            ],
            [
              "03",
              "Swap, learn, repeat",
              "Propose an exchange, meet online or in person, and grow together.",
            ],
          ].map(([n, title, body]) => (<div className="step" key={n}>
            <span>{n}</span>
            <div className="step-icon">
              <Icon name={n === "01" ? "user" : n === "02" ? "search" : "swap"} size={27} />
            </div>
            <h3>{title}</h3>
            <p>{body}</p>
          </div>))}
        </div>
      </section>
      <section className="skills-section" id="skills">
        <div className="skills-head">
          <div>
            <div className="section-eyebrow">Learn something new</div>
            <h2>Skills people are sharing</h2>
          </div>
          <Button variant="secondary" onClick={() => navigate("signup")}>
            Explore all skills
          </Button>
        </div>
        <div className="skill-cloud">
          {skillNames.map((skill, i) => (<button key={skill} onClick={() => navigate("signup")} className={`skill-tile tile-${i}`}>
            <span>{["{ }", "¡Hola!", "◉", "F", "♪", "“ ”"][i]}</span>
            <strong>{skill}</strong>
            <small>{[342, 219, 184, 276, 156, 131][i]} people</small>
            <Icon name="arrow" />
          </button>))}
        </div>
      </section>
      <section className="quote-section">
        <blockquote>
          “I taught Elena the basics of product design, and she helped me
          finally feel confident speaking Spanish. We still meet every other
          week.”
        </blockquote>
        <div>
          <Avatar person={people[0]} />
          <span>
            <strong>Priya Shah</strong>
            <small>Product designer · Toronto</small>
          </span>
        </div>
      </section>
      <section className="cta">
        <div>
          <span className="section-eyebrow">Ready when you are</span>
          <h2>Someone out there wants to learn what you know.</h2>
          <p>Your first exchange could be one conversation away.</p>
        </div>
        <Button onClick={() => navigate("signup")} icon="arrow">
          Create your free profile
        </Button>
      </section>
    </main>
    <footer>
      <Logo onClick={() => navigate("landing")} />
      <p>Learn freely. Teach generously.</p>
      <span>© 2026 SkillSwap</span>
    </footer>
  </div>);
}
function AuthPage({ kind, navigate, login, }) {
  const isSignup = kind === "signup";
  const [step, setStep] = useState(1);
  const [authNotice, setAuthNotice] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (isSignup && step === 1)
      setStep(2);
    else
      login();
  };
  return (<div className="auth-page">
    <div className="auth-brand">
      <Logo onClick={() => navigate("landing")} />
      <div className="auth-quote">
        <Icon name="swap" size={34} />
        <h2>Every person is both a teacher and a learner.</h2>
        <p>
          Join thousands of people sharing what they know and growing
          together.
        </p>
        <div className="mini-person">
          <Avatar person={people[4]} />
          <div>
            <strong>Sofia Reyes</strong>
            <span>Spanish tutor & yoga learner</span>
          </div>
        </div>
      </div>
      <div className="auth-dots" />
    </div>
    <div className="auth-form-wrap">
      <button className="back-link" onClick={() => navigate("landing")}>
        <Icon name="back" /> Back to home
      </button>
      <form className="auth-form" onSubmit={submit}>
        <div>
          <span className="section-eyebrow">
            {isSignup ? `Step ${step} of 2` : "Welcome back"}
          </span>
          <h1>
            {isSignup
              ? step === 1
                ? "Create your account"
                : "What do you want to swap?"
              : "Good to see you again"}
          </h1>
          <p>
            {isSignup
              ? step === 1
                ? "Start learning by sharing what you already know."
                : "This helps us find your best matches."
              : "Log in to continue your learning journey."}
          </p>
        </div>
        {(!isSignup || step === 1) && (<>
          <label>
            Full name{!isSignup && <small> (optional)</small>}
            <input placeholder={isSignup ? "Alex Morgan" : "Your name"} required={isSignup} />
          </label>
          <label>
            Email address
            <input type="email" placeholder="alex@example.com" required />
          </label>
          <label>
            Password
            <input type="password" placeholder="At least 8 characters" required />
          </label>
          {isSignup && (<label className="check-row">
            <input type="checkbox" required />
            <span>
              I agree to the Terms of Service and Community Guidelines.
            </span>
          </label>)}
        </>)}
        {isSignup && step === 2 && (<>
          <label>
            I can teach
            <input placeholder="e.g. React, baking, French" required />
          </label>
          <label>
            I want to learn
            <input placeholder="e.g. English, photography" required />
          </label>
          <div className="field-row">
            <label>
              My level
              <select>
                <option>Advanced</option>
                <option>Expert</option>
                <option>Intermediate</option>
              </select>
            </label>
            <label>
              Availability
              <select>
                <option>Weekday evenings</option>
                <option>Weekends</option>
                <option>Flexible</option>
              </select>
            </label>
          </div>
        </>)}
        <Button type="submit" className="full" icon="arrow">
          {isSignup
            ? step === 1
              ? "Continue"
              : "Find my matches"
            : "Log in"}
        </Button>
        {!isSignup && <button type="button" className="text-link" onClick={() => setAuthNotice("Password reset is not connected in this prototype yet.")}>Forgot password?</button>}
        <div className="auth-divider">
          <span>or</span>
        </div>
        <Button variant="secondary" className="full" onClick={() => setAuthNotice("Google sign-in is not connected in this prototype yet.")}>
          <span className="google-g">G</span> Continue with Google
        </Button>
        {authNotice && <p role="status" className="auth-notice">{authNotice}</p>}
        <p className="switch-auth">
          {isSignup ? "Already have an account?" : "New to SkillSwap?"}{" "}
          <button type="button" onClick={() => navigate(isSignup ? "login" : "signup")}>
            {isSignup ? "Log in" : "Create an account"}
          </button>
        </p>
      </form>
    </div>
  </div>);
}
function AppShell({ page, navigate, children, openNotifications, }) {
  const nav = [
    ["dashboard", "home", "Overview"],
    ["explore", "search", "Explore"],
    ["requests", "swap", "Requests"],
    ["messages", "message", "Messages"],
    ["sessions", "calendar", "Sessions"],
  ];
  const [mobile, setMobile] = useState(false);
  return (<div className="app-shell">
    <aside className={mobile ? "mobile-open" : ""}>
      <div className="side-top">
        <Logo onClick={() => navigate("dashboard")} />
        <button className="mobile-close" onClick={() => setMobile(false)}>
          <Icon name="close" />
        </button>
      </div>
      <nav>
        {nav.map(([id, icon, label]) => (<button key={id} className={page === id ? "active" : ""} onClick={() => {
          navigate(id);
          setMobile(false);
        }}>
          <Icon name={icon} />
          {label}
          {id === "messages" && <span className="nav-count">2</span>}
        </button>))}
      </nav>
      <div className="side-bottom">
        <button className={page === "settings" ? "active" : ""} onClick={() => navigate("settings")}>
          <Icon name="settings" />
          Settings
        </button>
        <div className="side-profile">
          <Avatar person={{ name: "Alex Morgan", avatar: "AM", color: "navy" }} />
          <div>
            <strong>Alex Morgan</strong>
            <span>View profile</span>
          </div>
          <Icon name="more" />
        </div>
      </div>
    </aside>
    <div className="app-main">
      <header className="app-header">
        <button className="menu-btn" onClick={() => setMobile(true)}>
          <Icon name="menu" />
        </button>
        <div className="header-search">
          <Icon name="search" />
          <input placeholder="Search skills or people…" onFocus={() => navigate("explore")} />
          <kbd>⌘ K</kbd>
        </div>
        <button className="notification-btn" onClick={openNotifications}>
          <Icon name="bell" />
          <span />
        </button>
        <Button className="header-cta" icon="plus" onClick={() => navigate("requests")}>
          New exchange
        </Button>
      </header>
      {children}
    </div>
  </div>);
}
function PageHead({ eyebrow, title, children, }) {
  return (<div className="page-head">
    <div>
      {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
      <h1>{title}</h1>
    </div>
    {children}
  </div>);
}
function Dashboard({ navigate }) {
  return (<main className="page dashboard">
    <PageHead eyebrow="Monday, March 9" title="Good morning, Alex">
      <Button variant="secondary" onClick={() => navigate("explore")} icon="search">
        Find people
      </Button>
    </PageHead>
    <div className="stats-grid">
      {[
        ["Active exchanges", "3", "+1 this month", "swap"],
        ["Pending requests", "2", "Needs your reply", "clock"],
        ["Sessions this week", "4", "Next one tomorrow", "calendar"],
      ].map(([label, value, note, icon], i) => (<div className={`stat-card stat-${i}`} key={label}>
        <div className="stat-icon">
          <Icon name={icon} />
        </div>
        <span>{label}</span>
        <strong>{value}</strong>
        <small>{note}</small>
      </div>))}
    </div>
    <section className="content-grid">
      <div className="content-main">
        <div className="section-title">
          <h2>Active exchanges</h2>
          <button onClick={() => navigate("requests")}>
            View all <Icon name="arrow" />
          </button>
        </div>
        <div className="exchange-list">
          <div className="exchange-card">
            <div className="exchange-users">
              <Avatar person={people[2]} />
              <span className="swap-mini">
                <Icon name="swap" size={15} />
              </span>
              <Avatar person={{ name: "Alex Morgan", avatar: "AM", color: "navy" }} />
            </div>
            <div className="exchange-info">
              <strong>
                English speaking <Icon name="swap" size={14} /> React
              </strong>
              <span>with Amara Okafor · 3 sessions completed</span>
              <div className="progress">
                <i style={{ width: "60%" }} />
              </div>
            </div>
            <Button variant="secondary" onClick={() => navigate("messages")} icon="message">
              Message
            </Button>
          </div>
          <div className="exchange-card">
            <div className="exchange-users">
              <Avatar person={people[0]} />
              <span className="swap-mini">
                <Icon name="swap" size={15} />
              </span>
              <Avatar person={{ name: "Alex Morgan", avatar: "AM", color: "navy" }} />
            </div>
            <div className="exchange-info">
              <strong>
                Figma <Icon name="swap" size={14} /> Photography
              </strong>
              <span>with Maya Chen · 1 session completed</span>
              <div className="progress">
                <i style={{ width: "28%" }} />
              </div>
            </div>
            <Button variant="secondary" onClick={() => navigate("messages")} icon="message">
              Message
            </Button>
          </div>
        </div>
        <div className="section-title">
          <h2>Recently viewed</h2>
          <button onClick={() => navigate("explore")}>
            Explore more <Icon name="arrow" />
          </button>
        </div>
        <div className="recent-grid">
          {people.slice(1, 4).map((p) => (<button className="recent-card" key={p.id} onClick={() => navigate("profile")}>
            <Avatar person={p} size="lg" />
            <div>
              <strong>{p.name}</strong>
              <span>{p.role}</span>
              <Stars rating={p.rating} />
            </div>
            <Icon name="chevron" />
          </button>))}
        </div>
      </div>
      <aside className="dashboard-side">
        <div className="section-title">
          <h2>Up next</h2>
          <button onClick={() => navigate("sessions")}>Calendar</button>
        </div>
        <div className="next-session">
          <div className="date-block">
            <strong>10</strong>
            <span>MAR</span>
          </div>
          <Badge tone="green">Tomorrow · 5:30 PM</Badge>
          <h3>Figma fundamentals</h3>
          <div className="mini-person">
            <Avatar person={people[0]} size="sm" />
            <span>
              with <strong>Maya Chen</strong>
            </span>
          </div>
          <Button className="full" icon="video">
            Join session
          </Button>
          <Button variant="ghost" className="full">
            Reschedule
          </Button>
        </div>
        <div className="tip-card">
          <span className="tip-icon">↗</span>
          <h3>Grow your profile</h3>
          <p>Add your weekend availability to get 35% more matches.</p>
          <button onClick={() => navigate("settings")}>
            Update availability <Icon name="arrow" />
          </button>
        </div>
      </aside>
    </section>
  </main>);
}
function Explore({ navigate }) {
  const [query, setQuery] = useState("");
  const [level, setLevel] = useState("All levels");
  const [availability, setAvailability] = useState("Any time");
  const [language, setLanguage] = useState("Any language");
  const [loading, setLoading] = useState(false);
  const filtered = useMemo(() => people.filter((p) => {
    const q = query.toLowerCase();
    return ((!q ||
      p.name.toLowerCase().includes(q) ||
      p.teaches.some((s) => s.name.toLowerCase().includes(q))) &&
      (level === "All levels" ||
        p.teaches.some((s) => s.level === level)) &&
      (availability === "Any time" || p.availability === availability) &&
      (language === "Any language" || p.languages.includes(language)));
  }), [query, level, availability, language]);
  const doSearch = () => {
    setLoading(true);
    window.setTimeout(() => setLoading(false), 650);
  };
  return (<main className="page explore">
    <PageHead eyebrow="Discover your next exchange" title="Find people to learn with">
      <span className="result-count">{filtered.length} great matches</span>
    </PageHead>
    <div className="search-panel">
      <div className="big-search">
        <Icon name="search" size={21} />
        <input value={query} onChange={(e) => setQuery(e.target.value)} onKeyDown={(e) => e.key === "Enter" && doSearch()} placeholder="Try “Spanish”, “React”, or a person’s name" />
        <Button onClick={doSearch}>Search</Button>
      </div>
      <div className="filters">
        <span>
          <Icon name="filter" /> Filters
        </span>
        <label>
          Proficiency
          <select value={level} onChange={(e) => setLevel(e.target.value)}>
            {["All levels", "Expert", "Advanced", "Intermediate"].map((o) => (<option key={o}>{o}</option>))}
          </select>
        </label>
        <label>
          Availability
          <select value={availability} onChange={(e) => setAvailability(e.target.value)}>
            {["Any time", "Weekday evenings", "Weekends", "Flexible"].map((o) => (<option key={o}>{o}</option>))}
          </select>
        </label>
        <label>
          Language
          <select value={language} onChange={(e) => setLanguage(e.target.value)}>
            {[
              "Any language",
              "English",
              "Spanish",
              "French",
              "Portuguese",
            ].map((o) => (<option key={o}>{o}</option>))}
          </select>
        </label>
        <button className="clear" onClick={() => {
          setQuery("");
          setLevel("All levels");
          setAvailability("Any time");
          setLanguage("Any language");
        }}>
          Clear all
        </button>
      </div>
    </div>
    {loading ? (<div className="people-grid">
      {[1, 2, 3].map((i) => (<div className="person-card skeleton" key={i}>
        <div />
        <div />
        <div />
        <div />
      </div>))}
    </div>) : filtered.length ? (<div className="people-grid">
      {filtered.map((p) => (<PersonCard key={p.id} person={p} navigate={navigate} />))}
    </div>) : (<div className="empty-state">
      <div>
        <Icon name="search" size={28} />
      </div>
      <h2>No matches yet</h2>
      <p>Try clearing a filter or searching for a broader skill.</p>
      <Button onClick={() => {
        setQuery("");
        setLevel("All levels");
        setAvailability("Any time");
        setLanguage("Any language");
      }}>
        Clear filters
      </Button>
    </div>)}
  </main>);
}
function PersonCard({ person, navigate, }) {
  const [saved, setSaved] = useState(false);
  return (<article className="person-card">
    <div className="match-tag">{person.match}% match</div>
    <button className={`save-btn ${saved ? "saved" : ""}`} onClick={() => setSaved(!saved)} aria-label="Save profile">
      <Icon name="heart" />
    </button>
    <button className="person-identity" onClick={() => navigate("profile")}>
      <Avatar person={person} size="xl" />
      <div>
        <h2>{person.name}</h2>
        <p>{person.role}</p>
        <span>
          <Icon name="location" size={14} /> {person.location}
        </span>
      </div>
    </button>
    <div className="card-skills">
      <span>TEACHES</span>
      {person.teaches.map((s, i) => (<Badge tone={i ? "blue" : "green"} key={s.name}>
        {s.name} · {s.level}
      </Badge>))}
    </div>
    <div className="wants">
      <span>Wants to learn</span>
      <strong>{person.learns.join(" · ")}</strong>
    </div>
    <div className="person-meta">
      <Stars rating={person.rating} count={person.reviews} />
      <span>
        <Icon name="clock" size={14} /> {person.availability}
      </span>
    </div>
    <Button className="full" onClick={() => navigate("profile")}>
      View profile
    </Button>
  </article>);
}
function Profile({ navigate, openRequest, }) {
  const p = people[2];
  return (<main className="page profile-page">
    <button className="back-link" onClick={() => navigate("explore")}>
      <Icon name="back" /> Back to explore
    </button>
    <div className="profile-hero">
      <div className="profile-main">
        <Avatar person={p} size="xl" online />
        <div>
          <div className="profile-name">
            <h1>{p.name}</h1>
            <Badge tone="green">Verified</Badge>
          </div>
          <p>{p.role}</p>
          <span>
            <Icon name="location" /> {p.location} · <Icon name="globe" />{" "}
            Speaks English & French
          </span>
          <Stars rating={p.rating} count={p.reviews} />
        </div>
      </div>
      <div className="profile-actions">
        <Button variant="secondary" onClick={() => navigate("messages")} icon="message">
          Message
        </Button>
        <Button onClick={openRequest} icon="swap">
          Propose exchange
        </Button>
      </div>
    </div>
    <div className="profile-layout">
      <div className="profile-content">
        <section className="profile-section">
          <h2>About Amara</h2>
          <p>
            {p.bio} I believe the best learning happens when both people feel
            comfortable making mistakes and asking questions. Outside of
            teaching, I’m learning to build small web apps.
          </p>
        </section>
        <section className="profile-section">
          <div className="section-title">
            <h2>Skills I can teach</h2>
            <span>2 skills</span>
          </div>
          <div className="skill-detail">
            <div className="skill-symbol">Aa</div>
            <div>
              <h3>English speaking</h3>
              <Badge tone="green">Expert</Badge>
              <p>
                Conversation practice, pronunciation, interview preparation,
                and confidence building for intermediate learners.
              </p>
              <span>
                <Icon name="check" /> 31 successful exchanges
              </span>
            </div>
          </div>
          <div className="skill-detail">
            <div className="skill-symbol purple">“ ”</div>
            <div>
              <h3>Public speaking</h3>
              <Badge tone="blue">Advanced</Badge>
              <p>
                Structure your ideas, present with clarity, and feel
                comfortable in front of a group.
              </p>
              <span>
                <Icon name="check" /> 12 successful exchanges
              </span>
            </div>
          </div>
        </section>
        <section className="profile-section">
          <h2>Recent reviews</h2>
          {[
            [
              "Nina Patel",
              "Amara is encouraging, prepared, and makes every session feel easy. I’m speaking more confidently at work already.",
              "2 weeks ago",
            ],
            [
              "Diego Soto",
              "A thoughtful teacher and great listener. She gave me specific exercises that made a real difference.",
              "1 month ago",
            ],
          ].map(([name, text, date], i) => (<div className="review" key={name}>
            <Avatar person={{
              name,
              avatar: name
                .split(" ")
                .map((x) => x[0])
                .join(""),
              color: i ? "amber" : "blue",
            }} />
            <div>
              <div>
                <strong>{name}</strong>
                <Stars rating={5} />
              </div>
              <p>{text}</p>
              <span>{date} · English speaking</span>
            </div>
          </div>))}
        </section>
      </div>
      <aside className="profile-side">
        <div className="side-card">
          <h3>Looking to learn</h3>
          <div className="wanted-skill">
            <span className="skill-symbol small">{"{ }"}</span>
            <div>
              <strong>React</strong>
              <span>Beginner</span>
            </div>
          </div>
          <div className="wanted-skill">
            <span className="skill-symbol small">♪</span>
            <div>
              <strong>Guitar</strong>
              <span>Beginner</span>
            </div>
          </div>
        </div>
        <div className="side-card">
          <h3>Availability</h3>
          <div className="availability-row">
            <span>Mon – Thu</span>
            <strong>6:00 – 9:00 PM</strong>
          </div>
          <div className="availability-row">
            <span>Saturday</span>
            <strong>10:00 AM – 2:00 PM</strong>
          </div>
          <small>Times shown in your timezone</small>
        </div>
        <div className="side-card response-card">
          <Icon name="clock" />
          <div>
            <strong>Usually responds in 2 hours</strong>
            <span>Last active 12 minutes ago</span>
          </div>
        </div>
      </aside>
    </div>
  </main>);
}
function Requests({ showToast }) {
  const [tab, setTab] = useState("Incoming");
  const [statuses, setStatuses] = useState({});
  const requests = tab === "Incoming"
    ? [
      {
        id: 1,
        person: people[4],
        offer: "Spanish conversation",
        want: "React basics",
        note: "I’m building a tiny recipe app and would love help with components. Happy to practice Spanish with you!",
        date: "Today",
      },
      {
        id: 2,
        person: people[5],
        offer: "Guitar",
        want: "TypeScript",
        note: "Your TypeScript experience looks like a great fit. I can teach beginner guitar chords and songs.",
        date: "Yesterday",
      },
    ]
    : tab === "Sent"
      ? [
        {
          id: 3,
          person: people[1],
          offer: "React",
          want: "English speaking",
          note: "Would love to pair on a small React project together.",
          date: "Mar 6",
        },
      ]
      : [];
  return (<main className="page requests-page">
    <PageHead eyebrow="Exchange hub" title="Requests">
      <Button icon="plus">New request</Button>
    </PageHead>
    <div className="tabs">
      {["Incoming", "Sent", "History"].map((t) => (<button className={tab === t ? "active" : ""} onClick={() => setTab(t)} key={t}>
        {t}
        {t === "Incoming" && <span>2</span>}
      </button>))}
    </div>
    {requests.length ? (<div className="request-list">
      {requests.map((r) => (<article className="request-card" key={r.id}>
        <div className="request-top">
          <Avatar person={r.person} size="lg" />
          <div>
            <h2>{r.person.name}</h2>
            <p>
              {r.person.role} · <Stars rating={r.person.rating} />
            </p>
            <span>{r.date}</span>
          </div>
          <Badge tone={statuses[r.id] === "accepted"
            ? "green"
            : statuses[r.id] === "rejected"
              ? "rose"
              : "amber"}>
            {statuses[r.id] ||
              (tab === "Sent" ? "Pending" : "New request")}
          </Badge>
        </div>
        <div className="request-swap">
          <div>
            <small>THEY’LL TEACH</small>
            <strong>{r.offer}</strong>
          </div>
          <span>
            <Icon name="swap" />
          </span>
          <div>
            <small>THEY WANT TO LEARN</small>
            <strong>{r.want}</strong>
          </div>
        </div>
        <blockquote>“{r.note}”</blockquote>
        {tab === "Incoming" && !statuses[r.id] && (<div className="request-actions">
          <Button variant="secondary" onClick={() => {
            setStatuses({ ...statuses, [r.id]: "rejected" });
            showToast("Request declined");
          }}>
            Decline
          </Button>
          <Button onClick={() => {
            setStatuses({ ...statuses, [r.id]: "accepted" });
            showToast(`Exchange with ${r.person.name} accepted`);
          }} icon="check">
            Accept exchange
          </Button>
        </div>)}
      </article>))}
    </div>) : (<div className="empty-state">
      <div>
        <Icon name="swap" size={28} />
      </div>
      <h2>No {tab.toLowerCase()} requests</h2>
      <p>
        {tab === "History"
          ? "Completed and declined exchanges will appear here."
          : "You’re all caught up for now."}
      </p>
    </div>)}
  </main>);
}
function Messages() {
  const [active, setActive] = useState(1);
  const [texts, setTexts] = useState(initialMessages);
  const [draft, setDraft] = useState("");
  const send = (e) => {
    e.preventDefault();
    if (!draft.trim())
      return;
    setTexts([
      ...texts,
      { id: Date.now(), mine: true, text: draft, time: "Now" },
    ]);
    setDraft("");
  };
  return (<main className="messages-page">
    <div className="conversations">
      <div className="messages-title">
        <h1>Messages</h1>
        <button>
          <Icon name="plus" />
        </button>
      </div>
      <div className="conversation-search">
        <Icon name="search" />
        <input placeholder="Search conversations" />
      </div>
      {conversations.map((c) => (<button className={`conversation ${active === c.id ? "active" : ""}`} onClick={() => setActive(c.id)} key={c.id}>
        <Avatar person={c.person} online={c.id === 1} />
        <div>
          <strong>{c.person.name}</strong>
          <p>{c.preview}</p>
        </div>
        <span>
          {c.time}
          {c.unread > 0 && <b>{c.unread}</b>}
        </span>
      </button>))}
    </div>
    <section className="chat">
      <header>
        <div className="mini-person">
          <Avatar person={people[2]} online />
          <div>
            <strong>Amara Okafor</strong>
            <span>
              Online · English <Icon name="swap" size={12} /> React
            </span>
          </div>
        </div>
        <div>
          <button className="icon-btn">
            <Icon name="video" />
          </button>
          <button className="icon-btn">
            <Icon name="more" />
          </button>
        </div>
      </header>
      <div className="chat-body">
        <div className="date-separator">
          <span>Today</span>
        </div>
        {texts.map((m) => (<div className={`message-row ${m.mine ? "mine" : ""}`} key={m.id}>
          {!m.mine && <Avatar person={people[2]} size="sm" />}
          <div>
            <p>{m.text}</p>
            <span>{m.time}</span>
          </div>
        </div>))}
      </div>
      <form className="composer" onSubmit={send}>
        <button type="button">
          <Icon name="plus" />
        </button>
        <input value={draft} onChange={(e) => setDraft(e.target.value)} placeholder="Write a message…" />
        <button className="send-btn" type="submit" aria-label="Send">
          <Icon name="send" />
        </button>
      </form>
    </section>
    <aside className="chat-details">
      <Avatar person={people[2]} size="xl" />
      <h2>Amara Okafor</h2>
      <p>London, UK</p>
      <Stars rating={5} count={34} />
      <Button variant="secondary" className="full">
        View profile
      </Button>
      <div className="detail-divider" />
      <h3>Your exchange</h3>
      <div className="exchange-compact">
        <span>
          <small>YOU TEACH</small>React basics
        </span>
        <Icon name="swap" />
        <span>
          <small>YOU LEARN</small>English speaking
        </span>
      </div>
      <div className="detail-divider" />
      <h3>Next session</h3>
      <div className="next-compact">
        <Icon name="calendar" />
        <div>
          <strong>Thursday, March 12</strong>
          <span>6:00 – 7:00 PM</span>
        </div>
      </div>
    </aside>
  </main>);
}
function Sessions({ showToast }) {
  const [completed, setCompleted] = useState(false);
  const [review, setReview] = useState(false);
  const [rating, setRating] = useState(0);
  return (<main className="page sessions-page">
    <PageHead eyebrow="Your learning calendar" title="Sessions">
      <Button icon="plus">Schedule session</Button>
    </PageHead>
    <div className="week-strip">
      {[
        ["MON", "9"],
        ["TUE", "10"],
        ["WED", "11"],
        ["THU", "12"],
        ["FRI", "13"],
        ["SAT", "14"],
        ["SUN", "15"],
      ].map(([day, date], i) => (<button className={i === 1 ? "active" : ""} key={day}>
        <span>{day}</span>
        <strong>{date}</strong>
        {[1, 3, 5].includes(i) && <i />}
      </button>))}
    </div>
    <div className="session-layout">
      <section>
        <div className="section-title">
          <h2>Upcoming</h2>
          <span>3 sessions</span>
        </div>
        <article className="session-card featured">
          <div className="session-time">
            <strong>5:30</strong>
            <span>PM</span>
            <i />
          </div>
          <div className="session-info">
            <Badge tone="green">Tomorrow</Badge>
            <h2>Figma fundamentals</h2>
            <p>Exchange with Maya Chen</p>
            <div className="mini-person">
              <Avatar person={people[0]} size="sm" />
              <span>You’re learning Figma · Session 2 of 5</span>
            </div>
          </div>
          <div className="session-buttons">
            <Button icon="video">Join session</Button>
            <Button variant="secondary">Reschedule</Button>
          </div>
        </article>
        <article className="session-card">
          <div className="session-time">
            <strong>6:00</strong>
            <span>PM</span>
          </div>
          <div className="session-info">
            <Badge tone="blue">Thursday, Mar 12</Badge>
            <h2>English conversation practice</h2>
            <p>Exchange with Amara Okafor</p>
          </div>
          <div className="session-buttons">
            <Button variant="secondary">View details</Button>
          </div>
        </article>
        <div className="section-title past-title">
          <h2>Past sessions</h2>
        </div>
        <article className="session-card muted">
          <div className="session-time">
            <strong>7:00</strong>
            <span>PM</span>
          </div>
          <div className="session-info">
            <Badge>March 5</Badge>
            <h2>Photography composition</h2>
            <p>Exchange with Jon Bell</p>
          </div>
          <div className="session-buttons">
            {completed ? (<Badge tone="green">
              <Icon name="check" size={14} /> Completed
            </Badge>) : (<Button variant="secondary" onClick={() => {
              setCompleted(true);
              setReview(true);
            }}>
              Mark completed
            </Button>)}
          </div>
        </article>
      </section>
      <aside>
        <div className="session-summary">
          <span className="section-eyebrow">March summary</span>
          <h3>Keep your momentum</h3>
          <div>
            <strong>7</strong>
            <span>
              Sessions
              <br />
              completed
            </span>
          </div>
          <div>
            <strong>6.5h</strong>
            <span>
              Time spent
              <br />
              learning
            </span>
          </div>
          <div className="streak">
            <Icon name="star" />
            <span>
              <strong>3 week streak</strong>Longest streak: 6 weeks
            </span>
          </div>
        </div>
      </aside>
    </div>
    {review && (<Modal title="How was your session?" onClose={() => setReview(false)}>
      <div className="review-modal">
        <Avatar person={people[3]} size="lg" />
        <p>
          Share a review for your photography session with{" "}
          <strong>Jon Bell</strong>.
        </p>
        <div className="rating-pick">
          {[1, 2, 3, 4, 5].map((n) => (<button className={n <= rating ? "active" : ""} key={n} onClick={() => setRating(n)}>
            <Icon name="star" size={28} />
          </button>))}
        </div>
        <label>
          What went well?
          <textarea placeholder="Jon explained composition clearly and gave me practical exercises…" />
        </label>
        <Button className="full" disabled={!rating} onClick={() => {
          setReview(false);
          showToast("Review submitted — thank you!");
        }}>
          Submit review
        </Button>
      </div>
    </Modal>)}
  </main>);
}
function Settings({ showToast }) {
  const [tab, setTab] = useState("Profile");
  return (<main className="page settings-page">
    <PageHead eyebrow="Your account" title="Settings" />
    <div className="settings-layout">
      <nav>
        {[
          "Profile",
          "Skills",
          "Availability",
          "Notifications",
          "Account",
        ].map((t) => (<button className={tab === t ? "active" : ""} onClick={() => setTab(t)} key={t}>
          <Icon name={t === "Profile"
            ? "user"
            : t === "Skills"
              ? "swap"
              : t === "Availability"
                ? "calendar"
                : t === "Notifications"
                  ? "bell"
                  : "settings"} />
          {t}
        </button>))}
      </nav>
      <section className="settings-form">
        <div className="settings-header">
          <h2>{tab}</h2>
          <p>
            {tab === "Profile"
              ? "Keep your public profile accurate and welcoming."
              : `Manage your ${tab.toLowerCase()} preferences.`}
          </p>
        </div>
        {tab === "Profile" ? (<>
          <div className="photo-setting">
            <Avatar person={{ name: "Alex Morgan", avatar: "AM", color: "navy" }} size="xl" />
            <div>
              <Button variant="secondary">Change photo</Button>
              <span>JPG or PNG · Max 5 MB</span>
            </div>
          </div>
          <div className="field-row">
            <label>
              First name
              <input defaultValue="Alex" />
            </label>
            <label>
              Last name
              <input defaultValue="Morgan" />
            </label>
          </div>
          <label>
            Headline
            <input defaultValue="Frontend developer and curious lifelong learner" />
          </label>
          <label>
            Bio
            <textarea defaultValue="I’m a frontend developer who loves helping people build their first React projects. I’m currently working on becoming a more confident English speaker and improving my photography." />
          </label>
          <div className="field-row">
            <label>
              Location
              <input defaultValue="Berlin, Germany" />
            </label>
            <label>
              Primary language
              <select defaultValue="English">
                <option>English</option>
                <option>German</option>
              </select>
            </label>
          </div>
        </>) : tab === "Availability" ? (<>
          <div className="availability-settings">
            <h3>Weekly availability</h3>
            {[
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ].map((day, i) => (<div className="day-row" key={day}>
              <label className="switch">
                <input type="checkbox" defaultChecked={i < 4 || i === 5} />
                <i />
              </label>
              <strong>{day}</strong>
              <input type="time" defaultValue={i === 5 ? "10:00" : "18:00"} />
              <span>to</span>
              <input type="time" defaultValue={i === 5 ? "14:00" : "21:00"} />
            </div>))}
          </div>
        </>) : tab === "Notifications" ? (<div className="notification-settings">
          {[
            "New exchange requests",
            "Request updates",
            "New messages",
            "Session reminders",
            "Weekly match recommendations",
          ].map((item, i) => (<div key={item}>
            <span>
              <strong>{item}</strong>
              <small>
                {i === 3
                  ? "24 hours and 30 minutes before a session"
                  : "Receive updates by email and in app"}
              </small>
            </span>
            <label className="switch">
              <input type="checkbox" defaultChecked={i !== 4} />
              <i />
            </label>
          </div>))}
        </div>) : (<div className="empty-settings">
          <Icon name={tab === "Skills" ? "swap" : "settings"} size={30} />
          <h3>{tab} preferences</h3>
          <p>
            Your current {tab.toLowerCase()} settings are ready to update.
          </p>
          <Button variant="secondary">Manage {tab.toLowerCase()}</Button>
        </div>)}
        <div className="settings-actions">
          <Button onClick={() => showToast("Settings saved successfully")} icon="check">
            Save changes
          </Button>
        </div>
      </section>
    </div>
  </main>);
}
function RequestModal({ onClose, showToast, }) {
  const submit = (e) => {
    e.preventDefault();
    onClose();
    showToast("Exchange request sent to Amara");
  };
  return (<Modal title="Propose a skill exchange" onClose={onClose}>
    <form className="request-form" onSubmit={submit}>
      <div className="modal-person">
        <Avatar person={people[2]} />
        <span>
          You’re proposing an exchange with <strong>Amara Okafor</strong>
        </span>
      </div>
      <div className="field-row">
        <label>
          You’ll teach
          <select>
            <option>React development</option>
            <option>TypeScript basics</option>
          </select>
        </label>
        <label>
          You’d like to learn
          <select>
            <option>English speaking</option>
            <option>Public speaking</option>
          </select>
        </label>
      </div>
      <label>
        Message
        <textarea required defaultValue="Hi Amara! I’d love to help you build your React project in exchange for English conversation practice. Would weekday evenings work for you?" />
      </label>
      <label>
        Preferred schedule
        <select>
          <option>Thursday evenings</option>
          <option>Saturday mornings</option>
          <option>Flexible</option>
        </select>
      </label>
      <div className="modal-actions">
        <Button variant="ghost" onClick={onClose}>
          Cancel
        </Button>
        <Button type="submit" icon="send">
          Send request
        </Button>
      </div>
    </form>
  </Modal>);
}
function SkillSwapApp() {
  const [page, setPage] = useState("landing");
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [requestOpen, setRequestOpen] = useState(false);
  const [toast, setToast] = useState("");
  const navigate = (p) => {
    setPage(p);
    window.scrollTo(0, 0);
  };
  const showToast = (text) => {
    setToast(text);
    window.setTimeout(() => setToast(""), 2800);
  };
  const login = () => navigate("dashboard");
  if (page === "landing")
    return <Landing navigate={navigate} />;
  if (page === "login" || page === "signup")
    return <AuthPage kind={page} navigate={navigate} login={login} />;
  const content = {
    dashboard: <Dashboard navigate={navigate} />,
    explore: <Explore navigate={navigate} />,
    profile: (<Profile navigate={navigate} openRequest={() => setRequestOpen(true)} />),
    requests: <Requests showToast={showToast} />,
    messages: <Messages />,
    sessions: <Sessions showToast={showToast} />,
    settings: <Settings showToast={showToast} />,
  };
  return (<AppShell page={page} navigate={navigate} openNotifications={() => setNotificationOpen(!notificationOpen)}>
    {content[page]}
    {notificationOpen && (<div className="notification-panel">
      <div className="panel-head">
        <h2>Notifications</h2>
        <button>Mark all as read</button>
      </div>
      {notifications.map((n) => (<button className={n.unread ? "unread" : ""} key={n.id}>
        <span className={`notification-icon ${n.icon}`}>
          <Icon name={n.icon} />
        </span>
        <span>
          <strong>{n.title}</strong>
          <p>{n.body}</p>
          <small>{n.time} ago</small>
        </span>
        {n.unread && <i />}
      </button>))}
    </div>)}
    {requestOpen && (<RequestModal onClose={() => setRequestOpen(false)} showToast={showToast} />)}
    {toast && (<div className="toast">
      <Icon name="check" />
      <span>{toast}</span>
    </div>)}
  </AppShell>);
}


export default function SkillSwap() {
  return (
    <div className="skillswap-embed">
      <style>{styles}</style>
      <SkillSwapApp />
    </div>
  );
}
