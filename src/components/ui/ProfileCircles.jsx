import avatar1 from '/avatar1.png';
import avatar2 from '/avatar2.png';
import avatar3 from '/avatar3.png';

export default function ProfileCircles() {
    return (
        <div className="flex items-center space-x-[-8px]">
            <div className="w-10 h-10 rounded-full overflow-hidden border-1 border-white">
                <img src={avatar1} alt="User 1" className="w-full h-full object-cover" />
            </div>
            <div className="w-10 h-10 rounded-full overflow-hidden border-1 border-white">
                <img src={avatar2} alt="User 2" className="w-full h-full object-cover" />
            </div>
            <div className="w-10 h-10 rounded-full overflow-hidden border-1 border-white">
                <img src={avatar3} alt="User 3" className="w-full h-full object-cover" />
            </div>
        </div>
    );
}
