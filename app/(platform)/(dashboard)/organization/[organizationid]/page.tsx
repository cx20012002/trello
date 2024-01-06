import {auth, OrganizationSwitcher} from "@clerk/nextjs";

function OrganizationIdPage() {
    const {userId, orgId} = auth();

    return (
        <div>
            <OrganizationSwitcher
                hidePersonal
            />
        </div>
    )
}

export default OrganizationIdPage;
