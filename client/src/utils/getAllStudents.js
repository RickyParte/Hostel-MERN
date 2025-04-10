const getAllStudents = async () => {
    const hostel = JSON.parse(localStorage.getItem("hostel"))._id;
    const result = await fetch("http://3.111.139.9:5000/api/student/get-all-students", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ hostel }),
    });
    const data = await result.json();
    return data;
};

export default getAllStudents;