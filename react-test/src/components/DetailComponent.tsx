import { useParams } from "react-router";

export default function DetailComponent() {
    const params = useParams();

    return (
        <>
            <div>
                Detail of some data with {params.detailId}
            </div>
        </>
    );
}