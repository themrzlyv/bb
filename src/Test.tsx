import React, { useCallback, useEffect, useState } from "react";

const Test: React.FC<{ userId: string }> = ({ userId }) => {
  const [user, setUser] = useState<any>();
  const fetchUser = useCallback(async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    const newUser = await res.json();
    setUser(newUser);
  }, [userId]);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);
  console.log(user);
  return <>test component</>;
};

export default React.memo(Test);
