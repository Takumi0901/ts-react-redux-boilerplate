import { css } from 'styled-components'
import { theme } from 'src/styles'

export const utilityStyles = () => css`
  .u-br-0 {
    border: none !important;
  }
  .u-fc-primary {
    color: ${theme.color.primary} !important;
  }
  .u-fc-action {
    color: ${theme.color.action} !important;
  }
  .u-fc-caution {
    color: ${theme.color.caution} !important;
  }
  .u-fc-grey {
    color: ${theme.color.grey} !important;
  }
  .u-fc-white {
    color: #fff !important;
  }
  .u-fz-10 {
    font-size: 1rem !important;
  }

  .u-fz-12 {
    font-size: 1.2rem !important;
  }

  .u-fz-14 {
    font-size: 1.4rem !important;
  }

  .u-fz-16 {
    font-size: 1.6rem !important;
  }

  .u-fz-18 {
    font-size: 1.8rem !important;
  }

  .u-fz-20 {
    font-size: 2rem !important;
  }

  .u-fz-22 {
    font-size: 2.2rem !important;
  }

  .u-fz-24 {
    font-size: 2.4rem !important;
  }

  .u-fz-26 {
    font-size: 2.6rem !important;
  }

  .u-fz-28 {
    font-size: 2.8rem !important;
  }

  .u-fz-30 {
    font-size: 3rem !important;
  }

  .u-fz-32 {
    font-size: 3.2rem !important;
  }

  .u-fz-34 {
    font-size: 3.4rem !important;
  }

  .u-lc-2 {
    display: box;
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 2;
    -moz-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    -moz-box-orient: vertical;
    box-orient: vertical;
  }

  .u-lc-3 {
    display: box;
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 3;
    -moz-line-clamp: 3;
    line-clamp: 3;
    -webkit-box-orient: vertical;
    -moz-box-orient: vertical;
    box-orient: vertical;
  }

  .u-lc-5 {
    display: box;
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 5;
    -moz-line-clamp: 5;
    line-clamp: 5;
    -webkit-box-orient: vertical;
    -moz-box-orient: vertical;
    box-orient: vertical;
  }

  .u-m-c {
    margin: 0 auto !important;
  }

  .u-mt-0 {
    margin-top: 0 !important;
  }

  .u-mt-8 {
    margin-top: ${theme.base.size}px !important;
  }

  .u-mt-16 {
    margin-top: ${theme.base.size * 2}px !important;
  }

  .u-mt-24 {
    margin-top: ${theme.base.size * 3}px !important;
  }

  .u-mt-32 {
    margin-top: ${theme.base.size * 4}px !important;
  }

  .u-mt-40 {
    margin-top: ${theme.base.size * 5}px !important;
  }

  .u-mt-48 {
    margin-top: ${theme.base.size * 6}px !important;
  }

  .u-mr-0 {
    margin-right: 0 !important;
  }

  .u-mr-8 {
    margin-right: ${theme.base.size}px !important;
  }

  .u-mr-16 {
    margin-right: ${theme.base.size * 2}px !important;
  }

  .u-mr-24 {
    margin-right: ${theme.base.size * 3}px !important;
  }

  .u-mr-32 {
    margin-right: ${theme.base.size * 4}px !important;
  }

  .u-mr-40 {
    margin-right: ${theme.base.size * 5}px !important;
  }

  .u-mr-48 {
    margin-right: ${theme.base.size * 6}px !important;
  }

  .u-mb-0 {
    margin-bottom: 0 !important;
  }

  .u-mb-8 {
    margin-bottom: ${theme.base.size}px !important;
  }

  .u-mb-16 {
    margin-bottom: ${theme.base.size * 2}px !important;
  }

  .u-mb-24 {
    margin-bottom: ${theme.base.size * 3}px !important;
  }

  .u-mb-32 {
    margin-bottom: ${theme.base.size * 4}px !important;
  }

  .u-mb-40 {
    margin-bottom: ${theme.base.size * 5}px !important;
  }

  .u-mb-48 {
    margin-bottom: ${theme.base.size * 6}px !important;
  }

  .u-ml-0 {
    margin-left: 0 !important;
  }

  .u-ml-8 {
    margin-left: ${theme.base.size}px !important;
  }

  .u-ml-16 {
    margin-left: ${theme.base.size * 2}px !important;
  }

  .u-ml-24 {
    margin-left: ${theme.base.size * 3}px !important;
  }

  .u-ml-32 {
    margin-left: ${theme.base.size * 4}px !important;
  }

  .u-ml-40 {
    margin-left: ${theme.base.size * 5}px !important;
  }

  .u-ml-48 {
    margin-left: ${theme.base.size * 6}px !important;
  }

  .u-pt-0 {
    padding-top: 0 !important;
  }

  .u-pt-8 {
    padding-top: ${theme.base.size}px !important;
  }

  .u-pt-16 {
    padding-top: ${theme.base.size * 2}px !important;
  }

  .u-pt-24 {
    padding-top: ${theme.base.size * 3}px !important;
  }

  .u-pt-32 {
    padding-top: ${theme.base.size * 4}px !important;
  }

  .u-pt-40 {
    padding-top: ${theme.base.size * 5}px !important;
  }

  .u-pt-48 {
    padding-top: ${theme.base.size * 6}px !important;
  }

  .u-pr-0 {
    padding-right: 0 !important;
  }

  .u-pr-8 {
    padding-right: ${theme.base.size}px !important;
  }

  .u-pr-16 {
    padding-right: ${theme.base.size * 2}px !important;
  }

  .u-pr-24 {
    padding-right: ${theme.base.size * 3}px !important;
  }

  .u-pr-32 {
    padding-right: ${theme.base.size * 4}px !important;
  }

  .u-pr-40 {
    padding-right: ${theme.base.size * 5}px !important;
  }

  .u-pr-48 {
    padding-right: ${theme.base.size * 6}px !important;
  }

  .u-pb-0 {
    padding-bottom: 0 !important;
  }

  .u-pb-8 {
    padding-bottom: ${theme.base.size}px !important;
  }

  .u-pb-16 {
    padding-bottom: ${theme.base.size * 2}px !important;
  }

  .u-pb-24 {
    padding-bottom: ${theme.base.size * 3}px !important;
  }

  .u-pb-32 {
    padding-bottom: ${theme.base.size * 4}px !important;
  }

  .u-pb-40 {
    padding-bottom: ${theme.base.size * 5}px !important;
  }

  .u-pb-48 {
    padding-bottom: ${theme.base.size * 6}px !important;
  }

  .u-pl-0 {
    padding-left: 0 !important;
  }

  .u-pl-8 {
    padding-left: ${theme.base.size}px !important;
  }

  .u-pl-16 {
    padding-left: ${theme.base.size * 2}px !important;
  }

  .u-pl-24 {
    padding-left: ${theme.base.size * 3}px !important;
  }

  .u-pl-32 {
    padding-left: ${theme.base.size * 4}px !important;
  }

  .u-pl-40 {
    padding-left: ${theme.base.size * 5}px !important;
  }

  .u-pl-48 {
    padding-left: ${theme.base.size * 6}px !important;
  }

  .u-ta-l {
    text-align: left !important;
  }

  .u-ta-c {
    text-align: center !important;
  }

  .u-ta-r {
    text-align: right !important;
  }
  .u-fw-n {
    font-weight: normal !important;
  }

  .u-fw-b {
    font-weight: 600 !important;
  }

  .u-td-u {
    text-decoration: underline !important;
  }

  .u-td-none {
    text-decoration: none !important;
  }

  .u-td-lh {
    text-decoration: line-through !important;
    opacity: 0.6;
  }

  .u-tt {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .u-va-t {
    vertical-align: top !important;
  }

  .u-va-m {
    vertical-align: middle !important;
  }

  .u-va-b {
    vertical-align: bottom !important;
  }
  .u-ws-pre {
    word-break: break-all;
    white-space: pre-line;
  }
  .u-d-tb {
    display: table !important;
  }

  .u-d-tbc {
    display: table-cell !important;
  }

  .u-d-b {
    display: block !important;
  }

  .u-d-ib {
    display: inline-block !important;
  }

  .u-d-n {
    display: none !important;
  }

  .u-d-pc {
    display: none !important;
  }

  .u-d-tb {
    display: none !important;
  }

  .u-d-sp {
    display: block !important;
  }
  @media (min-width: ${theme.base.viewport.desktop}px) {
    .u-d-pc {
      display: block !important;
    }

    .u-d-sp {
      display: none !important;
    }
  }
`
