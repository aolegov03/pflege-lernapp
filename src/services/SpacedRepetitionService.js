import { addDays, todayISO } from '../utils/date.js';

export class SpacedRepetitionService {
  schedule(previousCardState = {}, quality = 1) {
    const normalizedQuality = Number(quality);
    const now = new Date();
    const previousEase = previousCardState.ease ?? 2.3;
    const previousInterval = previousCardState.intervalDays ?? 0;
    const previousRepetitions = previousCardState.repetitions ?? 0;

    let ease = previousEase;
    let intervalDays = 1;
    let repetitions = previousRepetitions + 1;

    if (normalizedQuality <= 0) {
      ease = Math.max(1.3, previousEase - 0.25);
      intervalDays = 1;
      repetitions = 0;
    } else if (normalizedQuality === 1) {
      ease = Math.max(1.4, previousEase - 0.05);
      intervalDays = previousRepetitions <= 0 ? 1 : Math.max(2, Math.round(previousInterval * ease));
    } else {
      ease = Math.min(3.0, previousEase + 0.12);
      intervalDays = previousRepetitions <= 0 ? 3 : Math.max(3, Math.round(previousInterval * ease));
    }

    return {
      dueAt: addDays(now, intervalDays).toISOString(),
      intervalDays,
      ease,
      repetitions,
      lastQuality: normalizedQuality,
      lastReviewedAt: todayISO()
    };
  }
}
