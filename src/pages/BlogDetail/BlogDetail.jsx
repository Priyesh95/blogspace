import Container from "../../components/common/Container/Container";
import { useParams } from "react-router-dom";

const BlogDetail = () => {
    const params = useParams();

    return (
        <Container>
            <div>
                <h1>BlogDetail</h1>
                <p>This is the blog {params.id} detail page. Blog posts will be displayed here.</p>
            </div>
        </Container>
    )
}   

export default BlogDetail;