import AddTutorForm from '@/app/components/shared/AddTutorForm';
import React from 'react';

export const metadata = {
    title: "Add Tutor",
};

const AddTutorPage = async () => {

    const { token } = await auth.api.getToken({
        headers: await headers()
    })

    return (
        <AddTutorForm token={token} />
    );
};

export default AddTutorPage;