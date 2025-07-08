type InfoBoxPropsWarning = {
    type: 'warning' 
    level: string
}

type InfoBoxPropsInfo = {
    type: 'info'
    length: number
}

export type InfoBoxProps = InfoBoxPropsInfo | InfoBoxPropsWarning
