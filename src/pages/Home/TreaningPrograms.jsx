 import trainingData from '../../API/HomePageAPIs/traningData.json';
 import TrainingCard from './TrainingCard';
 const TreaningPrograms = () => {

 return <section className="py-5">
       
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          {trainingData.map((training, index) => (
            <TrainingCard key={index} title={training.title} description={training.description} />
          ))}
        </div>
      </section>
 }
 export default TreaningPrograms;