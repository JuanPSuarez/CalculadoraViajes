import { getDatabase, ref, set, onValue } from "firebase/database";


export function writeUserData(userId, title) {
    const db = getDatabase();
    set(ref(db, 'users/' + userId), {
      title: title,
    });
  }


export function ReadAllTitles() {
    const [titles, setTitles] = useState({});

    useEffect(() => {
        const db = getDatabase();
        const titlesRef = ref(db, "TITLES");

        onValue(titlesRef, (snapshot) => {
        const data = snapshot.val();
        setTitles(data); 
        });

        return () => onValue(titlesRef, () => {});
    }, [])}

    
