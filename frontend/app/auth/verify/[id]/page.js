import Layout from "@/components/layout/page"

function Verify() {
  return (
    <>
     <Layout>
        <div className="--center-all">
            <h2>Account Verification</h2>
            <p>
                To verify your account, click the button below...
            </p>
            <br />
            <button  className="--btn --btn-primary">
                Verify Account
            </button>
        </div>
     </Layout>
    </>
  )
}

export default Verify