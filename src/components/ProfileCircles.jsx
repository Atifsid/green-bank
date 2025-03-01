import user1 from '/user1.jpg';
import user2 from '/user2.jpg';
import user3 from '/user3.jpg';

export default function ProfileCircles() {
    return (
        <div className="flex items-center space-x-[-8px]">
            <div className="w-10 h-10 rounded-full overflow-hidden border-1 border-white">
                <img src={user1} alt="User 1" className="w-full h-full object-cover" />
            </div>
            <div className="w-10 h-10 rounded-full overflow-hidden border-1 border-white">
                <img src={user2} alt="User 2" className="w-full h-full object-cover" />
            </div>
            <div className="w-10 h-10 rounded-full overflow-hidden border-1 border-white">
                <img src={user3} alt="User 3" className="w-full h-full object-cover" />
            </div>
        </div>
    );
}
