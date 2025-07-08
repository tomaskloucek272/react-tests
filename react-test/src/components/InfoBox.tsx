import { type InfoBoxProps } from '../types/InfoBoxProps'

export default function InfoBox(props: InfoBoxProps) {
    let renderBlock = null;
    if (props.type == 'info') {
        renderBlock = <p>This is number {props.length}</p>
    } else {
        renderBlock = <p>This is level {props.level}</p>
    }
    return (
        <>
            {renderBlock}
        </>
    );
}