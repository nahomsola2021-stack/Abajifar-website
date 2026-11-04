import React, { useState, useEffect } from 'react';
import { useRouter } from '../../context/RouterContext';
import { toursData } from '../../data/toursData';
import { destinationsData } from '../../data/destinationsData';
import { X, CheckCircle2, Send, Compass, Shield } from 'lucide-react';

export const PlanYourTripModal: React.FC = () => {
  const { isInquiryModalOpen, closeInquiryModal, selectedTourForInquiry } = useRouter();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    travelDates: '',
    guests: 2,
    selectedTour: '',
    customNotes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (selectedTourForInquiry) {
      setFormData((prev) => ({ ...prev, selectedTour: selectedTourForInquiry }));
    }
  }, [selectedTourForInquiry]);

  if (!isInquiryModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    closeInquiryModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-[#FAF9F6]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#e6f7f9] flex items-center justify-center text-[#0891b2]">
              <Compass className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-slate-900">
                Plan Your Ethiopian Expedition
              </h3>
              <p className="text-[11px] text-[#0891b2] font-semibold">
                Direct response from our Addis Ababa travel specialists within 12 hours
              </p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {isSubmitted ? (
            <div className="py-10 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-600 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-display text-2xl font-bold text-slate-900">
                Your Inquiry Has Been Received
              </h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-[1.7] font-light">
                Thank you, <strong className="text-slate-900">{formData.fullName}</strong>. A dedicated Abajifar private tour specialist is reviewing your itinerary details and will contact you via email and WhatsApp.
              </p>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 max-w-md mx-auto text-left text-xs space-y-1 text-slate-600">
                <div><strong>Selected Package:</strong> {formData.selectedTour || 'Custom Tailored Journey'}</div>
                <div><strong>Estimated Dates:</strong> {formData.travelDates || 'Flexible'}</div>
                <div><strong>Guests:</strong> {formData.guests} Travelers</div>
                <div><strong>Contact numbers:</strong> +251 933 333 338, +251 944 444 447, +251 944 444 448</div>
              </div>
              <button
                onClick={handleClose}
                className="mt-4 px-6 py-2.5 bg-[#0891b2] hover:bg-[#0e7490] text-white text-xs font-semibold rounded-lg transition-colors shadow-sm"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-slate-700 mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Eleanor Vance"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0891b2]"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-bold text-slate-700 mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. eleanor@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0891b2]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-slate-700 mb-1.5">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0891b2]"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-bold text-slate-700 mb-1.5">
                    Number of Travelers
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: Number(e.target.value) })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#0891b2]"
                  >
                    <option value={1}>Solo Explorer (1 person)</option>
                    <option value={2}>Couple / 2 Travelers</option>
                    <option value={3}>Small Group (3-4 Travelers)</option>
                    <option value={5}>Family / Group (5-8 Travelers)</option>
                    <option value={10}>Large Group (9+ Travelers)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-slate-700 mb-1.5">
                    Approximate Travel Dates
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. November 2026 or Timkat Festival"
                    value={formData.travelDates}
                    onChange={(e) => setFormData({ ...formData, travelDates: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0891b2]"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-bold text-slate-700 mb-1.5">
                    Select Tour or Destination
                  </label>
                  <select
                    value={formData.selectedTour}
                    onChange={(e) => setFormData({ ...formData, selectedTour: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#0891b2]"
                  >
                    <option value="">Custom Tailored Itinerary</option>
                    <optgroup label="Popular Tours">
                      {toursData.map((t) => (
                        <option key={t.id} value={t.title}>
                          {t.title} ({t.durationDays}D)
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="Regions">
                      {destinationsData.map((d) => (
                        <option key={d.id} value={`Region: ${d.name}`}>
                          Region: {d.name}
                        </option>
                      ))}
                    </optgroup>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-bold text-slate-700 mb-1.5">
                  Specific Interests & Notes (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about specific interests: photography focus, cultural festivals, trekking preferences, hotel category..."
                  value={formData.customNotes}
                  onChange={(e) => setFormData({ ...formData, customNotes: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0891b2]"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-slate-500 flex items-center gap-1.5 font-light">
                  <Shield className="w-4 h-4 text-[#0891b2]" />
                  <span>Licensed Ethiopian tour operator. No spam or sharing.</span>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-7 py-3 bg-[#0891b2] hover:bg-[#0e7490] text-white text-sm font-bold rounded-xl transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Submitting...' : 'Send Trip Inquiry'}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
