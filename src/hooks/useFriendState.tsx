import React, { useEffect, useState } from "react";

export function useFriendStatus(friendID: string) {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    console.log("Mudou !");
  }, [isOnline]);

  return isOnline;
}
