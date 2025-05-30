import React from 'react';
import { Bell, X } from 'lucide-react';
import { isNotification } from '../features/uiSlice';
import { useDispatch, useSelector } from 'react-redux';

const Notification = () => {

  const dispatch = useDispatch();
  const isNotificationn = useSelector((state) => state.uiSlice.isNotificationOpen);


  return (
    <div className={`${isNotificationn ? "fixed" : "hidden"}  lg:top-20 top-12  lg:right-30 right-5 w-80 bg-white shadow-xl rounded-2xl border border-gray-200 z-50`}>
      <div className="flex items-center justify-between px-4 py-3 border-b">
        <div className="flex items-center gap-2">
          <Bell className="text-blue-600 w-5 h-5" />
          <h2 className="text-base font-semibold text-gray-800">Notifications</h2>
        </div>
        <button onClick={() => dispatch(isNotification())} className="text-gray-400 hover:text-gray-600 transition">
          <X className="w-4 h-4" />
        </button>
      </div>
      <div className="p-4 space-y-3 max-h-60 overflow-y-auto">
        {/* Notification Item */}
        <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
          <div className="flex-shrink-0">
            <Bell className="text-blue-500 w-5 h-5 mt-1" />
          </div>
          <div className="text-sm text-gray-700">
            Yangi xabar oldingiz! <span className="font-medium">“Sizning uyingizga izoh yozildi.”</span>
            <div className="text-xs text-gray-400 mt-1">5 daqiqa oldin</div>
          </div>
        </div>

        {/* Another Notification */}
        <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
          <div className="flex-shrink-0">
            <Bell className="text-green-500 w-5 h-5 mt-1" />
          </div>
          <div className="text-sm text-gray-700">
            Arizangiz qabul qilindi.
            <div className="text-xs text-gray-400 mt-1">1 soat oldin</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
