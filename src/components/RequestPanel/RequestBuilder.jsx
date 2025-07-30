import RequestForm from "./RequestForm"

export default function RequestBuilder({ request, setRequest }) {
    return(<>
        <div className="p-2.5 border-r-1 border-gray-400 h-full">
            <RequestForm request={request} setRequest={setRequest} />
        </div>
    </>)
}