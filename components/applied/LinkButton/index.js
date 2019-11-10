import React from 'react'
import css from "./style.scss"
import { useRouter } from 'next/router'
import { strings_ja as importedStrings } from './strings'

export default function LinkButton(props) {
    const router = useRouter()
    const linkLabel = props.linkLabel ? props.linkLabel : importedStrings.back
    const linkPath = props.linkPath ? props.linkPath : '/'

    const handleClick = React.useCallback(
      (e) => {
        router.push({pathname: linkPath})
      },
      [router]
    )

    return (
        <div className={css.menuButton}
                onClick={handleClick}
            ><span href="#" className={css.arrow + ' ' + css.rightArrow}></span>{linkLabel}</div>
    )
}
