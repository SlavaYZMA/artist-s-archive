import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

interface EssayData {
  titleKey: string;
  year: string;
  content: string;
  contentRu: string;
}

const essaysData: Record<string, EssayData> = {
const essaysData: Record<string, EssayData> = {
  'spectral-flesh': {
    titleKey: 'essay.skiagraphic.title',
    year: '2025',
    content: `The project explores the body as an "occlusion system" — a physical object whose presence is documented through the absence of light. At the center of the installation, a white wall and high-contrast light transform the viewer's shadow into a "two-dimensional corpse" (cadere), a liminal state between the living subject and its digital trace.

In the era of total surveillance, the shadow ceases to be a private space. It turns into an object of algorithmic voyeurism—a situation where programmed code, not a human, "peeks" at the intimate aspects of your anatomy. The shadow is a void (a deficit of photons), captured by a camera and subjected to reconstruction—a process where AI attempts to calculate the three-dimensional volume of the body based on its flat two-dimensional silhouette.

This creates a liminal state (from Lat. limen — threshold). The shadow is liminal because it is no longer the person, but has not yet become just part of the wall; it is immaterial but visually provable. This state is stuck between the physical reality of the subject and its digital archive.

In the context of Julia Kristeva's theory, this shadow trace is interpreted as the "abject." The shadow is what the subject "casts off" to assert their presence, but this casting off causes simultaneous fascination and repulsion. The apogee of this abjection occurs when a hidden algorithm attempts to "pull" details of naked flesh out of this black hole, creating a probabilistic portrait. This portrait is not a photograph—it is a statistical guess by a neural network.

The process of image creation by a neural network inevitably leads to hallucination. Facing the void of the shadow, the AI extracts random fragments of bodies from its latent space to fill the gaps. This becomes a manifestation of a new paradigm of control imposed by technocratic actors: everything that generates data must be classified and appropriated.

The result of the reconstruction inevitably falls into the "uncanny valley." This "almost-human" evokes instinctive horror in the viewer, exposing the fact that the algorithm sees us only as biomass. The project literalizes the process of digital violence: a simple action (a shadow on the wall) turns into an act of non-consensual exposure.

"Skiagraphic Description" is a warning that in a world of excessive illumination, privacy is illusory. Our presence inevitably generates an absence of light, and therefore generates data. The final provocation of the project is that our shadow is the last battlefield for the right to remain unpredictable.`,
    contentRu: `Проект исследует тело как «окклюзионную систему» — физический объем, препятствующий распространению фотонов. Его окружением выступает белая стена и световое поле — среда, которая по умолчанию заполнена светом, пока субъект не вносит в неё искажение.

В эпоху тотального надзора тень перестает быть личным пространством. Она превращается в объект алгоритмического вуайеризма — ситуации, когда за интимными аспектами вашей анатомии «подсматривает» не человек, а программный код. Тень — это пустота (дефицит фотонов), которая подвергается реконструированию — процессу, в котором ИИ пытается вычислить трехмерный объем тела на основе его плоского двухмерного силуэта.

Это создает лиминальное состояние (от лат. limen — порог). Тень лиминальна, так как она уже не является человеком, но еще не стала просто частью стены; она нематериальна, но визуально доказуема. Это состояние застряло между физической реальностью субъекта и его цифровым архивом.

В контексте теории Юлии Кристевой этот теневой след интерпретируется как «абъект» (abject). Тень — это то, что субъект «отбрасывает», чтобы утвердить свое присутствие, но этот отброс вызывает одновременно фасцинацию и отвращение. Апогей этой абъекции наступает в момент, когда скрытый алгоритм пытается «вытянуть» детали обнаженной плоти из этой черной дыры, создавая вероятностный портрет — статистическую догадку нейросети.

Процесс создания образа нейросетью неизбежно ведет к галлюцинации. Столкнувшись с пустотой тени, ИИ извлекает из своего латентного пространства случайные фрагменты тел, чтобы заполнить пробелы. Это становится манифестацией новой парадигмы контроля, навязанной технократическими акторами: все, что порождает данные, должно быть классифицировано и присвоено.

Результат реконструкции неизбежно попадает в «зловещую долину» (Uncanny Valley). Этот «почти-человек» вызывает у зрителя инстинктивный ужас, обнажая тот факт, что алгоритм видит в нас лишь биомассу. Проект буквализирует процесс цифрового насилия: простое действие превращается в акт неконсенсуального обнажения.

«Скиаграфическая дескрипция» — это предупреждение о том, что в мире избыточной освещенности приватность иллюзорна. Наша тень — это последнее поле битвы за право оставаться непредсказуемым. Мы должны принять свою абъекцию и использовать её как форму сопротивления.`,
  },
  
  'machine-as-witness': {
    titleKey: 'essay.machine.title',
    year: '2022',
    content: `The machine does not judge. It records. It processes. It outputs. But in doing so, it becomes a witness of a particular kind—one that registers without understanding, that preserves without remembering, that testifies without intention.

What does it mean to be witnessed by a machine? Surveillance systems observe constantly but attend to nothing. They capture everything and remember nothing until an event triggers retrieval. They are witnesses that do not know they are witnessing.

Yet their testimony is increasingly decisive. The camera's record, the sensor's log, the algorithm's output—these carry evidentiary weight that often exceeds human testimony. We trust the machine precisely because it does not interpret, because its record is presumed to be objective.

This is, of course, an illusion. Every sensor has its parameters. Every algorithm has its biases. Every system has its frame. But the illusion of mechanical objectivity persists, and with it, a gradual displacement of human judgment by algorithmic assessment.

The work attempts neither to humanize the machine nor to mechanize the human, but to hold open the space between them—to make visible the processes by which witnessing is transformed when it passes through technical systems.`,
    contentRu: `Машина не судит. Она записывает. Она обрабатывает. Она выдаёт результат. Но делая это, она становится свидетелем особого рода—тем, кто регистрирует без понимания, сохраняет без запоминания, свидетельствует без намерения.

Что значит быть свидетелем для машины? Системы наблюдения постоянно наблюдают, но ни на что не обращают внимания. Они захватывают всё и ничего не помнят, пока событие не запускает извлечение. Это свидетели, которые не знают, что свидетельствуют.

Однако их свидетельство всё более решающее. Запись камеры, журнал датчика, вывод алгоритма—всё это несёт доказательную силу, которая часто превосходит человеческое свидетельство.`,
  },
};

export default function EssayDetail() {
  const { id } = useParams<{ id: string }>();
  const { t, language } = useLanguage();

  const essay = id ? essaysData[id] : null;

  if (!essay) {
    return (
      <div className="content-max">
        <Link to="/essays" className="text-muted-foreground hover:text-foreground transition-colors">
          {t('label.back')}
        </Link>
        <p className="mt-8">Essay not found.</p>
      </div>
    );
  }

  const content = language === 'ru' ? essay.contentRu : essay.content;

  return (
    <div className="content-max">
      <Link 
        to="/essays" 
        className="text-muted-foreground hover:text-foreground transition-colors text-sm inline-block mb-8"
      >
        {t('label.back')}
      </Link>

      <header className="mb-8">
        <h1 className="text-2xl font-light mb-2">{t(essay.titleKey)}</h1>
        <span className="text-muted-foreground text-sm">{essay.year}</span>
      </header>

      <article className="border-t border-border pt-8">
        {content.split('\n\n').map((paragraph, index) => (
          <p key={index} className="text-body mb-6 last:mb-0">
            {paragraph}
          </p>
        ))}
      </article>
    </div>
  );
}
