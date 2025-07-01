interface SelectedHeading {
    selectedCity: string
}

function LabelComponent(props: SelectedHeading) {
    return (
        <h1>{props.selectedCity} <span className="badge text-bg-secondary">*</span></h1>
    );
}

export default LabelComponent;