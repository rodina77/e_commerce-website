
export default function Footer()
{
    return(
        <>
<footer id="footer" className="bg-gradient gradient-bottom text-light shadow mt-5 p-3 text-center fs-5">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3 p-3">
                <h5 className="text-uppercase pt-3 pb-2">Footer Content</h5>
                <p>Here you can use rows and columns to organize your footer content.</p>
                <p>organize your footer content Here you can use rows and columns to organize your footer content.</p>
               
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>
            <div className="col-md-3 mb-md-0 mb-3 p-3">
                <h5 className="text-uppercase">Links</h5>
                <p>can use rows and columns</p>
                <p>can use rows and columns an use rows</p>
                <img id="imgg" src="/assets/images/360_F_392719944_L0LYv3e7QozB2tsj3CfUN0HPC8eZQOWb-removebg-preview.png" width="50%"/>

               
            </div>

            <div className="col-md-3 mb-md-0 mb-3 p-3">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled">
                <p>link1</p>
                <p>link2</p>
                </ul>
            </div>

        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2020 Copyright:
        <a className="text-white" href="https://mdbootstrap.com/"> MDBootstrap.com</a>
    </div>

</footer>
        </>
    )

}